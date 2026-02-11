import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";

const PrivateLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <DashboardNavbar />
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
