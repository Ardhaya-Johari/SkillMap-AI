from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
from utils import calculate_gap, generate_roadmap

app = FastAPI(title="SkillMap AI Service")

class Skill(BaseModel):
    name: str
    level: int

class AnalysisRequest(BaseModel):
    skills: List[Skill]
    careerGoal: str

@app.post("/analyze")
def analyze(data: AnalysisRequest):
    # Dummy mapping for career goal required skills
    career_skills = [
        {"name": "Python", "level": 5},
        {"name": "React", "level": 4},
        {"name": "SQL", "level": 4},
        {"name": "AI/ML", "level": 3}
    ]

    user_skills = [s.dict() for s in data.skills]
    gaps = calculate_gap(user_skills, career_skills)
    roadmap = generate_roadmap(gaps)

    return {
        "skills": user_skills,
        "gaps": gaps,
        "roadmap": roadmap
    }

# Run: uvicorn main:app --host 0.0.0.0 --port 8000 --reload
