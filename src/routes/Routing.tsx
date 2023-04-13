import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routerPaths } from "./paths";
import HomePage from "../pages/HomePage/Home";
import CatFactPage from "../pages/CatFactPage/CatFact";
import DogImagePage from "../pages/DogImagePage/DogImage";
import Header from "../components/Header/Header";
import ShoppingListPage from "../pages/ShoppingListPage/ShoppingList";
import HowLongPage from "../pages/HowLongPage/HowLong";
import HowLongUntil from "../components/HowLongUntil/HowLongUntil";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path={routerPaths.noPath}
          element={<Navigate to={routerPaths.home} replace />}
        />
        <Route path={routerPaths.home} element={<HomePage />} />
        <Route path={routerPaths.catFact} element={<CatFactPage />} />
        <Route path={routerPaths.dogImage} element={<DogImagePage />} />
        <Route path={routerPaths.shoppingList} element={<ShoppingListPage />} />
        <Route path={routerPaths.howLong} element={<HowLongPage />} />
        <Route path={routerPaths.howLongUntil} element={<HowLongUntil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
