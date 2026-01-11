import os
import requests
import json
from jinja2 import Template
import re
import unicodedata

# 1. Configuration
API_URL = "https://yosintv-api.pages.dev/api/highlights.json"
OUTPUT_DIR = "dist"
DOMAIN = "www.cricfoot.net"

# 2. Top Leagues Filter (Adjust these names to match your API data exactly)
TOP_LEAGUES = [
    "Premier League", 
    "La Liga", 
    "Serie A", 
    "Bundesliga", 
    "Ligue 1", 
    "UEFA Champions League"
]

def slugify(text):
    if not text: return "match"
    text = str(text).lower()
    text = text.replace('&', 'and').replace('.', '')
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('ascii')
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text).strip('-')
    return text

def build():
    if not os.path.exists(OUTPUT_DIR): 
        os.makedirs(OUTPUT_DIR)
    
    print(f"Fetching data...")
    try:
        response = requests.get(API_URL, timeout=15)
        response.raise_for_status()
        data = response.json()
    except Exception as e:
        print(f"Failed to fetch API: {e}")
        return

    try:
        with open("index_template.html", "r", encoding="utf-8") as f:
            home_tpl = Template(f.read())
        with open("highlights_template.html", "r", encoding="utf-8") as f:
            detail_tpl = Template(f.read())
    except FileNotFoundError as e:
        print(f"Error: Templates missing! {e}")
        return

    valid_matches = []

    print("Generating filtered match pages...")
    for m in data:
        t1 = m.get('team1')
        t2 = m.get('team2')
        m_date = m.get('date')
        category = m.get('category', '') # This is usually where the League Name is
        
        # FILTER: Only process if the league is in our TOP_LEAGUES list
        if category not in TOP_LEAGUES:
            continue

        if not t1 or not t2 or not m_date:
            continue

        url_slug = f"{slugify(t1)}-vs-{slugify(t2)}-{slugify(m_date)}"
        m['url_slug'] = url_slug

        match_dir = os.path.join(OUTPUT_DIR, "highlights", url_slug)
        if not os.path.exists(match_dir): 
            os.makedirs(match_dir)

        # YouTube ID extraction
        link = m.get('link', '')
        yt_id = ""
        if 'v=' in link:
            yt_id = link.split('v=')[1].split('&')[0]
        elif 'youtu.be/' in link:
            yt_id = link.split('youtu.be/')[1].split('?')[0]

        detail_html = detail_tpl.render(
            match=m,
            yt_id=yt_id,
            seo_title=f"{t1} vs {t2} Highlights ({m_date})",
            url_slug=url_slug
        )
        
        with open(os.path.join(match_dir, "index.html"), "w", encoding="utf-8") as f:
            f.write(detail_html)
            
        valid_matches.append(m)

    # Sort and Save Homepage
    valid_matches.sort(key=lambda x: x.get('date', ''), reverse=True)
    with open(os.path.join(OUTPUT_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(home_tpl.render(matches=valid_matches))

    # Sitemap Generation
    sitemap_content = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    sitemap_content += f'  <url><loc>https://{DOMAIN}/</loc><priority>1.0</priority></url>\n'
    for m in valid_matches:
        sitemap_content += f'  <url><loc>https://{DOMAIN}/highlights/{m["url_slug"]}/</loc><priority>0.8</priority></url>\n'
    sitemap_content += '</urlset>'
    
    with open(os.path.join(OUTPUT_DIR, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(sitemap_content)

    print(f"--- BUILD SUCCESSFUL: {len(valid_matches)} matches included ---")

if __name__ == "__main__":
    build()
