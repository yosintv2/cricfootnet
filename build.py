import os
import requests
import json
from datetime import datetime
from jinja2 import Template
import re

# Configuration
API_URL = "https://yosintv-api.pages.dev/api/highlights.json"
OUTPUT_DIR = "dist"

def slugify(text):
    # Converts "India vs Pakistan" to "india-vs-pakistan"
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

def build_site():
    if not os.path.exists(OUTPUT_DIR): os.makedirs(OUTPUT_DIR)
    
    # Fetch Data
    print("Fetching data from API...")
    data = requests.get(API_URL).json()
    data.sort(key=lambda x: x.get('date', ''), reverse=True)

    # Load Templates (Make sure you save your HTML as these filenames)
    with open("index_template.html", "r") as f:
        home_temp = Template(f.read())
    with open("highlights_template.html", "r") as f:
        detail_temp = Template(f.read())

    # 1. Build Individual Match Pages
    print(f"Generating {len(data)} match pages...")
    for match in data:
        match_id = match['id']
        slug = f"{slugify(match['team1'])}-vs-{slugify(match['team2'])}"
        match_dir = os.path.join(OUTPUT_DIR, "highlights", slug)
        
        if not os.path.exists(match_dir): os.makedirs(match_dir)

        # SEO Data
        seo_title = f"{match['team1']} vs {match['team2']} ({match['date']}) | {match['category']} Highlights"
        seo_desc = f"Watch HD highlights of {match['team1']} vs {match['team2']} from {match['category']}. Match played on {match['date']}."
        
        # Filter related matches (same category, excluding current)
        related = [m for m in data if m['category'] == match['category'] and m['id'] != match_id][:6]

        rendered_html = detail_temp.render(
            match=match,
            seo_title=seo_title,
            seo_desc=seo_desc,
            related=related,
            json_ld=json.dumps({
                "@context": "https://schema.org",
                "@type": "VideoObject",
                "name": seo_title,
                "description": seo_desc,
                "thumbnailUrl": [match.get('thumbnail', 'https://www.cricfoot.net/cf_favicon.ico')],
                "uploadDate": match['date'],
                "contentUrl": f"https://www.cricfoot.net/highlights/{slug}/",
                "embedUrl": match['link']
            })
        )

        with open(os.path.join(match_dir, "index.html"), "w") as f:
            f.write(rendered_html)

    # 2. Build Homepage
    print("Generating Homepage...")
    home_html = home_temp.render(matches=data[:20]) # First 20 matches
    with open(os.path.join(OUTPUT_DIR, "index.html"), "w") as f:
        f.write(home_html)

    print("Build Complete!")

if __name__ == "__main__":
    build_site()
