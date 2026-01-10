import os
import requests
import json
from jinja2 import Template
import re

API_URL = "https://yosintv-api.pages.dev/api/highlights.json"
OUTPUT_DIR = "dist"

def slugify(text):
    # Removes special characters and replaces spaces with hyphens
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

def build():
    if not os.path.exists(OUTPUT_DIR): os.makedirs(OUTPUT_DIR)
    
    print("Fetching Matches...")
    data = requests.get(API_URL).json()
    # Sort by date (newest first)
    data.sort(key=lambda x: x.get('date', ''), reverse=True)

    with open("index_template.html", "r", encoding="utf-8") as f:
        home_tpl = Template(f.read())
    with open("highlights_template.html", "r", encoding="utf-8") as f:
        detail_tpl = Template(f.read())

    for match in data:
        # Create unique slug using: Team1-vs-Team2-Date
        clean_date = slugify(match['date'])
        slug = f"{slugify(match['team1'])}-vs-{slugify(match['team2'])}-{clean_date}"
        
        path = os.path.join(OUTPUT_DIR, "highlights", slug)
        if not os.path.exists(path): os.makedirs(path)

        # Unique SEO Title
        title = f"{match['team1']} vs {match['team2']} Highlights ({match['date']}) - {match['category']}"
        desc = f"Watch {match['team1']} vs {match['team2']} match highlights from {match['date']}. Full HD video report for {match['category']}."
        
        # Get YouTube ID safely
        yt_id = match['link'].split('v=')[1].split('&')[0] if 'v=' in match['link'] else ""

        html = detail_tpl.render(
            match=match,
            yt_id=yt_id,
            seo_title=title,
            seo_desc=desc,
            url_slug=slug
        )
        
        with open(os.path.join(path, "index.html"), "w", encoding="utf-8") as f:
            f.write(html)

    # Homepage Generation
    with open(os.path.join(OUTPUT_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(home_tpl.render(matches=data))

    print("SEO Build Complete with Unique Date Slugs!")

if __name__ == "__main__":
    build()
