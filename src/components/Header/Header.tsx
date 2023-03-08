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
        <HeaderButton className="homeButton navButton">
          <Link to={routerPaths.home}>Home</Link>
        </HeaderButton>
        <HeaderButton className="navButton catButton">
          <Link to={routerPaths.catFact}>Cat Facts</Link>
        </HeaderButton>
        <HeaderButton className="navButton dogButton">
          <Link to={routerPaths.dogImage}>Dog Images</Link>
        </HeaderButton>
        <HeaderButton className="navButton shoppingListButton">
          <Link to={routerPaths.shoppingList}>Shopping List</Link>
        </HeaderButton>
      </div>
    </header>
  );
};

export default Header;
