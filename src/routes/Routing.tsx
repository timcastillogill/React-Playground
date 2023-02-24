import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routerPaths } from "./paths";
import HomePage from "../pages/HomePage/HomePage";
import CatFactPage from "../pages/CatFactPage";
import DogImagePage from "../pages/DogImagePage";
import Header from "../components/Header/Header";
import ShoppingListPage from "../pages/ShoppingListPage/ShoppingListPage";

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
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
