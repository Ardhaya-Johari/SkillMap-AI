from typing import List, Dict

def calculate_gap(user_skills: List[Dict], career_skills: List[Dict]) -> List[Dict]:
    """
    Compare user skills with career goal required skills and calculate gap
    """
    gaps = []
    for cskill in career_skills:
        u = next((s for s in user_skills if s['name'].lower() == cskill['name'].lower()), None)
        level = u['level'] if u else 0
        gap = max(cskill['level'] - level, 0)
        gaps.append({"name": cskill['name'], "gap": gap})
    return gaps

def generate_roadmap(gaps: List[Dict]) -> List[Dict]:
    """
    Generate skill roadmap with dummy resources
    """
    roadmap = []
    for g in gaps:
        if g['gap'] > 0:
            roadmap.append({
                "skill": g['name'],
                "resources": [
                    f"https://www.google.com/search?q=learn+{g['name']}",
                    f"https://www.youtube.com/results?search_query=learn+{g['name']}"
                ]
            })
    return roadmap
