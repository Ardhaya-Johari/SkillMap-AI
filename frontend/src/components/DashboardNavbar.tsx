import { Link, useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="backdrop-blur-xl bg-white/10 border-b border-white/20 px-8 py-4 flex justify-between items-center text-white">
      <Link to="/dashboard" className="text-2xl font-bold">
        SkillMap AI
      </Link>

      <div className="space-x-6">
        <Link to="/skills" className="hover:text-indigo-400 transition">
          Skills
        </Link>
        <Link to="/career-goal" className="hover:text-indigo-400 transition">
          Career
        </Link>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
