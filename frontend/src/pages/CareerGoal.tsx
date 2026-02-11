import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const CareerGoal = () => {
  const [goal, setGoal] = useState('');
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      await API.post('/career', { goal });
      navigate('/dashboard');
    } catch {
      alert('Failed to save career goal');
    }
  };

 return (
  <div className="min-h-screen flex items-center justify-center 
                  bg-gradient-to-br from-indigo-900 via-purple-900 to-black px-4">

    <div className="backdrop-blur-2xl bg-white/10 border border-white/20
                    p-8 rounded-3xl shadow-2xl w-full max-w-lg">

      <h2 className="text-3xl font-bold text-white mb-2 text-center">
        🎯 Set Your Career Goal
      </h2>

      <p className="text-gray-300 text-sm text-center mb-6">
        Tell us where you want to go. We’ll build your roadmap.
      </p>

      <input
        type="text"
        placeholder="e.g. AI Engineer, Full Stack Developer..."
        value={goal}
        onChange={e => setGoal(e.target.value)}
        className="w-full px-4 py-3 rounded-xl 
                   bg-white/20 text-white placeholder-gray-300
                   outline-none focus:ring-2 focus:ring-indigo-400
                   transition mb-5"
      />

      <button
        onClick={handleSave}
        className="w-full py-3 rounded-xl 
                   bg-gradient-to-r from-indigo-500 to-cyan-500
                   hover:from-indigo-600 hover:to-cyan-600
                   text-white font-semibold
                   shadow-lg transition-all duration-300"
      >
        Save & Continue
      </button>
    </div>
  </div>
);

};

export default CareerGoal;
