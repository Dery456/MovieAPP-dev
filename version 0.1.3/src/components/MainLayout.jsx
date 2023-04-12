import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import "./../App.scss";
import NavBarBox from "./Main/NavBarBox";

const MainLayout = () => {
  return (
    <>
      <NavBarBox />
      <div className="conteiner">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
