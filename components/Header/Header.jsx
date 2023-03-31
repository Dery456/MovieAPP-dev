import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to={"./"} className="header__brand">
        Move app
      </Link>
      <Link to={"./films"} className="button">
        Посик
      </Link>
    </div>
  );
};

export default Header;
