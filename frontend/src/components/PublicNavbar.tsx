import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <nav className="backdrop-blur-xl bg-white/10 border-b border-white/20 px-8 py-4 flex justify-between items-center text-white">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        SkillMap AI
      </Link>

      <div className="space-x-6">
        <Link to="/login" className="hover:text-indigo-400 transition">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default PublicNavbar;
