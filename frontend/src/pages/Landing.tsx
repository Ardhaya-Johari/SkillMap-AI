import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-bg">
    <h1 className="text-5xl font-bold text-white mb-4">SkillMap AI</h1>
    <p className="text-lg text-white mb-8">Personalized Skill Gap Analysis for Students</p>
    <div className="space-x-4">
      <Link to="/signup" className="bg-secondary text-white px-4 py-2 rounded">Get Started</Link>
      <Link to="/login" className="bg-primary text-white px-4 py-2 rounded">Login</Link>
    </div>
  </div>
);

export default Landing;
