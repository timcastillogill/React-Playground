import React from "react";
import { Link } from "react-router-dom";
import { routerPaths } from "../routes/paths";

const HomePage = () => {
  return (
    <section>
      <h2>This is the home page</h2>
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
