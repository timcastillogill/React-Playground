import React from "react";
import { Link } from "react-router-dom";
import { routerPaths } from "../../routes/paths";

const Header = () => {
  return (
    <>
      <header>
        <h1 className="appName">Cat Fact App</h1>
      </header>
      <button>
        <Link to={routerPaths.home}>Home</Link>
      </button>
      <button>
        <Link to={routerPaths.catFact}>Cat Facts</Link>
      </button>
      <button>
        <Link to={routerPaths.dogImage}>Dog Images</Link>
      </button>
    </>
  );
};

export default Header;
