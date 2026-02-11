import { useState } from 'react';
import API from '../services/api';

interface SkillFormProps {
  onSave: () => void;
  existingSkill?: { id: number; name: string; level: number };
}

const SkillForm = ({ onSave, existingSkill }: SkillFormProps) => {
  const [name, setName] = useState(existingSkill?.name || '');
  const [level, setLevel] = useState(existingSkill?.level || 1);

  const handleSave = async () => {
    if (!name.trim()) return;

    if (existingSkill) {
      await API.put(`/skills/${existingSkill.id}`, { name, level });
    } else {
      await API.post('/skills', { name, level });
    }

    setName('');
    setLevel(1);
    onSave();
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 
                    p-4 rounded-2xl shadow-lg mb-4 
                    flex flex-col md:flex-row gap-3 items-center">

      {/* Skill Name */}
      <input
        type="text"
        placeholder="Enter skill (e.g. React)"
        value={name}
        onChange={e => setName(e.target.value)}
        className="bg-white/20 text-white placeholder-gray-300
                   px-4 py-2 rounded-lg outline-none
                   focus:ring-2 focus:ring-indigo-400
                   w-full md:w-1/2 transition"
      />

      {/* Level Selector */}
      <div className="flex items-center gap-2 w-full md:w-1/4">
        <input
          type="range"
          min={1}
          max={5}
          value={level}
          onChange={e => setLevel(Number(e.target.value))}
          className="w-full accent-indigo-500"
        />
        <span className="text-indigo-400 font-semibold w-6 text-center">
          {level}
        </span>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="px-4 py-2 rounded-lg 
                   bg-gradient-to-r from-indigo-500 to-cyan-500
                   hover:from-indigo-600 hover:to-cyan-600
                   text-white font-medium
                   shadow-md transition-all duration-300
                   w-full md:w-auto"
      >
        {existingSkill ? 'Update' : 'Add'}
      </button>
    </div>
  );
};

export default SkillForm;
