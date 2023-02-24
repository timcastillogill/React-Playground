import React from "react";
import { Link } from "react-router-dom";
import { routerPaths } from "../../routes/paths";
import HeaderButton from "../ui/HeaderButton";

const Header = () => {
  return (
    <>
      <header>
        <h1 className="appName">Cat Fact App</h1>
      </header>
      <HeaderButton className="homeButton navButton">
        <Link to={routerPaths.home}>Home</Link>
      </HeaderButton>
      <HeaderButton className="navButton">
        <Link to={routerPaths.catFact}>Cat Facts</Link>
      </HeaderButton>
      <HeaderButton className="navButton">
        <Link to={routerPaths.dogImage}>Dog Images</Link>
      </HeaderButton>
    </>
  );
};

export default Header;
