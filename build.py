import os
import requests
import json
from jinja2 import Template
import re

# 1. Your Confirmed API
API_URL = "https://yosintv-api.pages.dev/api/highlights.json"
OUTPUT_DIR = "dist"

def slugify(text):
    if not text:
        return "match"
    # Convert to lowercase, replace spaces/special chars with hyphens
    return re.sub(r'[^a-z0-9]+', '-', str(text).lower()).strip('-')

def build():
    # Ensure output directory exists
    if not os.path.exists(OUTPUT_DIR): os.makedirs(OUTPUT_DIR)
    
    print(f"Fetching data from: {API_URL}")
    try:
        response = requests.get(API_URL)
        response.raise_for_status()
        data = response.json()
    except Exception as e:
        print(f"Failed to fetch API: {e}")
        return

    # Load your local templates
    try:
        with open("index_template.html", "r", encoding="utf-8") as f:
            home_tpl = Template(f.read())
        with open("highlights_template.html", "r", encoding="utf-8") as f:
            detail_tpl = Template(f.read())
    except FileNotFoundError as e:
        print(f"Error: Template files not found in root directory! {e}")
        return

    valid_matches = []

    # 2. Process each match safely
    for m in data:
        # We need these 3 things for a unique SEO URL
        t1 = m.get('team1')
        t2 = m.get('team2')
        m_date = m.get('date')
        
        if not t1 or not t2 or not m_date:
            print(f"Skipping match ID {m.get('id')} due to missing data.")
            continue

        # Create the unique slug: team1-vs-team2-date
        clean_date = slugify(m_date)
        url_slug = f"{slugify(t1)}-vs-{slugify(t2)}-{clean_date}"
        
        # Define the folder path for this match
        match_dir = os.path.join(OUTPUT_DIR, "highlights", url_slug)
        if not os.path.exists(match_dir): os.makedirs(match_dir)

        # SEO Metadata for this specific match
        seo_title = f"{t1} vs {t2} Highlights ({m_date}) - {m.get('category', 'Sports')}"
        seo_desc = f"Watch {t1} vs {t2} match highlights from {m_date}. High-quality video replays and match report on CricFoot."
        
        # YouTube ID extraction
        link = m.get('link', '')
        yt_id = link.split('v=')[1].split('&')[0] if 'v=' in link else ""

        # Render the HTML
        detail_html = detail_tpl.render(
            match=m,
            yt_id=yt_id,
            seo_title=seo_title,
            seo_desc=seo_desc,
            url_slug=url_slug
        )
        
        with open(os.path.join(match_dir, "index.html"), "w", encoding="utf-8") as f:
            f.write(detail_html)
            
        valid_matches.append(m)

    # 3. Generate Homepage
    print(f"Generating Homepage with {len(valid_matches)} matches...")
    with open(os.path.join(OUTPUT_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(home_tpl.render(matches=valid_matches))

    # 4. Generate Sitemap for Google
    print("Generating Sitemap.xml...")
    sitemap_content = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    sitemap_content += '<url><loc>https://www.cricfoot.net/</loc><priority>1.0</priority></url>\n'
    
    for m in valid_matches:
        slug = f"{slugify(m['team1'])}-vs-{slugify(m['team2'])}-{slugify(m['date'])}"
        sitemap_content += f'<url><loc>https://www.cricfoot.net/highlights/{slug}/</loc><priority>0.8</priority></url>\n'
    
    sitemap_content += '</urlset>'
    with open(os.path.join(OUTPUT_DIR, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(sitemap_content)

    print("Build Successful!")

if __name__ == "__main__":
    build()
