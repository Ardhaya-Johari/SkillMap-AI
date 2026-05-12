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

