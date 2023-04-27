import React from "react";
import { Link } from "react-router-dom";
import { routerPaths } from "../../routes/paths";
import HeaderButton from "../ui/HeaderButton";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="title">
        <h1 className="appName">React Playground</h1>
      </div>
      <div className="headerButtons">
        <HeaderButton className="homeButton glowing-btn">
          <Link to={routerPaths.home}>Home</Link>
        </HeaderButton>
        <HeaderButton className="navButton glowing-btn">
          <Link to={routerPaths.catFact}>Cat Facts</Link>
        </HeaderButton>
        <HeaderButton className="navButton glowing-btn">
          <Link to={routerPaths.dogImage}>Dog Images</Link>
        </HeaderButton>
        <HeaderButton className="navButton glowing-btn">
          <Link to={routerPaths.shoppingList}>Shopping List</Link>
        </HeaderButton>
        <HeaderButton className="navButton glowing-btn">
          <Link to={routerPaths.howLongUntil}>How Long Until..</Link>
        </HeaderButton>
        <HeaderButton className="navButton glowing-btn">
          <Link to={routerPaths.football}>Football Information</Link>
        </HeaderButton>
      </div>
    </header>
  );
};

export default Header;
