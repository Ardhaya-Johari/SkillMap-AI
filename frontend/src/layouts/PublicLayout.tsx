import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <PublicNavbar />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
