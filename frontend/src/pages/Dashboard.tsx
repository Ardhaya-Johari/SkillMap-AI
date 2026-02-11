import { useEffect, useState } from 'react';
import API from '../services/api';
import SkillRadar from '../components/charts/SkillRadar';
import SkillBar from '../components/charts/SkillBar';

interface Skill {
  name: string;
  level: number;
}

interface Gap {
  name: string;
  gap: number;
}

interface RoadmapItem {
  skill: string;
  resources: string[];
}

const Dashboard = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [gaps, setGaps] = useState<Gap[]>([]);
  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([]);

  const fetchAnalysis = async () => {
    const res = await API.get('/analysis');
    setSkills(res.data.skills);
    setGaps(res.data.gaps);
    setRoadmap(res.data.roadmap);
  };

  useEffect(() => {
    fetchAnalysis();
  }, []);

  return (
  <div className="min-h-screen 
                  bg-gradient-to-br 
                  from-[#0f2027] via-[#203a43] to-[#2c5364] 
                  px-6 py-10">

    <div className="max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-white mb-8 tracking-wide">
        📊 Skill Analysis Dashboard
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Radar Chart Card */}
        <div className="p-6 rounded-2xl 
                        bg-white/10 backdrop-blur-lg 
                        border border-white/20 
                        shadow-2xl 
                        hover:scale-[1.01] 
                        transition duration-300">
          <h3 className="text-xl text-white font-semibold mb-4">
            Skill Radar Overview
          </h3>
          <SkillRadar skills={skills} gaps={gaps} />
        </div>

        {/* Roadmap Bar Chart Card */}
        <div className="p-6 rounded-2xl 
                        bg-white/10 backdrop-blur-lg 
                        border border-white/20 
                        shadow-2xl 
                        hover:scale-[1.01] 
                        transition duration-300">
          <h3 className="text-xl text-white font-semibold mb-4">
            Learning Roadmap
          </h3>
          <SkillBar roadmap={roadmap} />
        </div>

      </div>

    </div>
  </div>
);

};

export default Dashboard;
