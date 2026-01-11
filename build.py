import os
import requests
import json
import shutil
from jinja2 import Template
import re
import unicodedata

# 1. Configuration
API_URL = "https://yosintv-api.pages.dev/api/highlights.json"
OUTPUT_DIR = "dist"
DOMAIN = "www.cricfoot.net"

def slugify(text):
    """Creates a clean, URL-safe slug."""
    if not text:
        return "general"
    text = str(text).lower()
    text = text.replace('&', 'and')
    text = text.replace('.', '')
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('ascii')
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text).strip('-')
    return text

def build():
    # Ensure output directory exists
    if not os.path.exists(OUTPUT_DIR): 
        os.makedirs(OUTPUT_DIR)
    
    # --- FAVICON FIX ---
    # This looks for cf_favicon.ico in your script folder and copies it to dist/favicon.ico
    if os.path.exists("cf_favicon.ico"):
        shutil.copy("cf_favicon.ico", os.path.join(OUTPUT_DIR, "favicon.ico"))
        print("✅ Favicon copied to dist/favicon.ico")
    else:
        print("❌ Warning: cf_favicon.ico NOT found in current folder!")

    print(f"Fetching data from: {API_URL}")
    try:
        response = requests.get(API_URL, timeout=15)
        response.raise_for_status()
        data = response.json()
    except Exception as e:
        print(f"Failed to fetch API: {e}")
        return

    # Load templates
    try:
        with open("index_template.html", "r", encoding="utf-8") as f:
            home_tpl = Template(f.read())
        with open("highlights_template.html", "r", encoding="utf-8") as f:
            detail_tpl = Template(f.read())
    except FileNotFoundError as e:
        print(f"Error: Templates missing! {e}")
        return

    valid_matches = []

    print("Generating match pages with league-based URLs...")
    for m in data:
        t1, t2, m_date = m.get('team1'), m.get('team2'), m.get('date')
        category = m.get('category', 'Sports')
        
        if not t1 or not t2 or not m_date:
            continue

        league_slug = slugify(category)
        match_slug = f"{slugify(t1)}-vs-{slugify(t2)}-{slugify(m_date)}"
        full_url_path = f"{league_slug}/{match_slug}"
        m['url_slug'] = full_url_path

        match_dir = os.path.join(OUTPUT_DIR, league_slug, match_slug)
        if not os.path.exists(match_dir): 
            os.makedirs(match_dir)

        seo_title = f"{t1} vs {t2} Highlights ({m_date}) - {category}"
        seo_desc = f"Watch {t1} vs {t2} match highlights from {m_date}. HD video replays on CricFoot."
        
        link = m.get('link', '')
        yt_id = ""
        if 'v=' in link: yt_id = link.split('v=')[1].split('&')[0]
        elif 'youtu.be/' in link: yt_id = link.split('youtu.be/')[1].split('?')[0]

        detail_html = detail_tpl.render(
            match=m, yt_id=yt_id, seo_title=seo_title, 
            seo_desc=seo_desc, url_slug=full_url_path
        )
        
        with open(os.path.join(match_dir, "index.html"), "w", encoding="utf-8") as f:
            f.write(detail_html)
        valid_matches.append(m)

    # 3. Generate Homepage
    valid_matches.sort(key=lambda x: x.get('date', ''), reverse=True)
    with open(os.path.join(OUTPUT_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(home_tpl.render(matches=valid_matches))

    # 4. Generate Sitemap
    sitemap_content = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    sitemap_content += f'  <url><loc>https://{DOMAIN}/</loc><priority>1.0</priority></url>\n'
    for m in valid_matches:
        sitemap_content += f'  <url><loc>https://{DOMAIN}/{m["url_slug"]}/</loc><priority>0.8</priority></url>\n'
    sitemap_content += '</urlset>'
    
    with open(os.path.join(OUTPUT_DIR, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(sitemap_content)

    with open(os.path.join(OUTPUT_DIR, "CNAME"), "w", encoding="utf-8") as f:
        f.write(DOMAIN)

    print("--- BUILD SUCCESSFUL ---")

if __name__ == "__main__":
    build()
