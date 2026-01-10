import os
import requests
import json
from datetime import datetime
from jinja2 import Template

# 1. Configuration
API_URL = "https://yosintv-api.pages.dev/api/highlights.json"
OUTPUT_DIR = "dist" # The folder you will deploy to GitHub Pages
TEMPLATE_FILE = "template.html"

def get_yt_thumb(link):
    if not link or 'v=' not in link:
        return "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800"
    video_id = link.split('v=')[1].split('&')[0]
    return f"https://img.youtube.com/vi/{video_id}/sddefault.jpg"

def slugify(text):
    return text.lower().replace(" ", "-").replace("vs", "-vs-").replace("--", "-")

def build_site():
    # Create output directories
    if not os.path.exists(OUTPUT_DIR): os.makedirs(OUTPUT_DIR)
    if not os.path.exists(f"{OUTPUT_DIR}/highlights"): os.makedirs(f"{OUTPUT_DIR}/highlights")

    # Fetch Data
    print("Fetching match data...")
    response = requests.get(API_URL)
    matches = response.json()
    matches.sort(key=lambda x: x['date'], reverse=True)

    # Load Template
    with open(TEMPLATE_FILE, 'r') as f:
        template = Template(f.read())

    # 2. GENERATE INDIVIDUAL MATCH PAGES (The SEO Secret)
    print("Generating match pages...")
    for m in matches:
        match_title = f"{m['team1']} vs {m['team2']} Highlights - {m['category']}"
        slug = f"{slugify(m['team1'])}-vs-{slugify(m['team2'])}-{m['id']}"
        
        html = template.render(
            page_title=match_title,
            page_description=f"Watch HD highlights of {m['team1']} vs {m['team2']}. Played on {m['date']}. High quality sports replays on CricFoot.",
            match=m,
            thumb=get_yt_thumb(m['link']),
            is_single_page=True
        )
        
        with open(f"{OUTPUT_DIR}/highlights/{slug}.html", "w") as f:
            f.write(html)

    # 3. GENERATE HOME PAGE
    print("Generating homepage...")
    home_html = template.render(
        page_title="CricFoot - Watch Football & Cricket Highlights",
        page_description="Latest sports highlights from EPL, IPL, and more.",
        matches=matches[:20], # Show latest 20
        get_thumb=get_yt_thumb,
        is_single_page=False
    )
    with open(f"{OUTPUT_DIR}/index.html", "w") as f:
        f.write(home_html)

    print("Success! SEO pages generated in /dist")

if __name__ == "__main__":
    build_site()
