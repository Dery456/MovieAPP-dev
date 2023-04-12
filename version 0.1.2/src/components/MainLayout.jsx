import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const MainLayout = () => {
  return (
    <div style={{ width: "80%" }}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
