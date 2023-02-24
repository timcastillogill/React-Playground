import React from "react";
import { Link } from "react-router-dom";
import { routerPaths } from "../../routes/paths";
import "./Homepage.css";

const HomePage = () => {
  return (
    <section>
      <button>
        <Link to={routerPaths.catFact}>This way to Cat Facts 👉</Link>
      </button>
      <button>
        <Link to={routerPaths.dogImage}>This way to Dog Images 👉</Link>
      </button>
    </section>
  );
};

export default HomePage;
