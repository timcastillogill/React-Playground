import React from "react";
import "./Home.css";
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
    </section>
  );
};

export default HomePage;
