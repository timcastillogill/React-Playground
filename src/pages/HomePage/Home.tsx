import React from "react";
import "./Home.css";
import ShoppingListPage from "../ShoppingListPage/ShoppingList";
import DogImage from "../../components/DogImage/DogImage";
import CatFact from "../../components/CatFact/CatFact";
import HowLongPage from "../HowLongPage/HowLong";

const HomePage = () => {
  return (
    <section>
      <div className="homePageComponents">
        <DogImage />
        <CatFact />
        <ShoppingListPage />
      </div>
    </section>
  );
};

export default HomePage;
