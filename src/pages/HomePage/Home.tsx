import React from "react";
import { Link } from "react-router-dom";
import { routerPaths } from "../../routes/paths";
import "./Homepage.css";
import DogImagePage from "../DogImagePage/DogImage";
import CatFactPage from "../CatFactPage/CatFact";
import ShoppingListPage from "../ShoppingListPage/ShoppingList";

const HomePage = () => {
  return (
    <section>
      <div className="homePageComponents">
        <DogImagePage />
        <CatFactPage />
        <ShoppingListPage />
      </div>
      <div>
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
      </div>
    </section>
  );
};

export default HomePage;
