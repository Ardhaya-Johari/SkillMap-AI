import { useEffect, useState } from 'react';
import API from '../services/api';
import SkillForm from '../components/SkillForm';
import SkillCard from '../components/SkillCard';

interface Skill {
  id: number;
  name: string;
  level: number;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  const fetchSkills = async () => {
    const res = await API.get('/skills');
    setSkills(res.data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDelete = async (id: number) => {
    await API.delete(`/skills/${id}`);
    fetchSkills();
  };

 return (
  <div className="min-h-screen 
                  bg-gradient-to-br from-indigo-900 via-purple-900 to-black
                  py-12 px-4">

    <div className="max-w-3xl mx-auto">

      <div className="backdrop-blur-2xl bg-white/10 border border-white/20
                      rounded-3xl p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-white mb-2">
          🛠 Manage Skills
        </h2>

        <p className="text-gray-300 text-sm mb-6">
          Add your skills and rate your expertise level (1–5)
        </p>

        {/* Skill Form */}
        <SkillForm onSave={fetchSkills} />

        {/* Skills List */}
        <div className="mt-6 space-y-3">
          {skills.length === 0 ? (
            <p className="text-gray-400 text-sm">
              No skills added yet. Start by adding one above.
            </p>
          ) : (
            skills.map(skill => (
              <SkillCard
                key={skill.id}
                name={skill.name}
                level={skill.level}
                onDelete={() => handleDelete(skill.id)}
              />
            ))
          )}
        </div>

      </div>
    </div>
  </div>
);

};

export default Skills;
