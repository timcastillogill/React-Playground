import React from "react";
import { Link } from "react-router-dom";
import { routerPaths } from "../../routes/paths";
import "./Homepage.css";
import ShoppingListPage from "../ShoppingListPage/ShoppingListPage";

const HomePage = () => {
  return (
    <section>
      <button>
        <Link to={routerPaths.catFact}>This way to Cat Facts 👉</Link>
      </button>
      <button>
        <Link to={routerPaths.dogImage}>This way to Dog Images 👉</Link>
      </button>
      <button>
        <Link to={routerPaths.shoppingList}>
          This way to your Shopping List 👉
        </Link>
      </button>
    </section>
  );
};

export default HomePage;
