import React from "react";
import { Link } from "react-router-dom";
import { routerPaths } from "../../routes/paths";
import HeaderButton from "../ui/HeaderButton";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="headerButtons">
        <HeaderButton className="navButton navButton">
          <Link to={routerPaths.home}>Home</Link>
        </HeaderButton>
        <HeaderButton className="navButton navButton">
          <Link to={routerPaths.catFact}>Cat Facts</Link>
        </HeaderButton>
        <HeaderButton className="navButton navButton">
          <Link to={routerPaths.dogImage}>Dog Images</Link>
        </HeaderButton>
        <HeaderButton className="navButton navButton">
          <Link to={routerPaths.shoppingList}>Shopping List</Link>
        </HeaderButton>
      </div>
    </header>
  );
};

export default Header;
