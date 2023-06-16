import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routerPaths } from "./paths";
import HomePage from "../pages/HomePage/Home";
import CatFactPage from "../pages/CatFactPage/CatFact";
import DogImagePage from "../pages/DogImagePage/DogImage";
import ShoppingListPage from "../pages/ShoppingListPage/ShoppingList";
import HowLongPage from "../pages/HowLongUntilPage/HowLongUntil";
import Football from "../pages/FootballPage/Football";
import DesktopNavBar from "../components/ui/Navbar/components/DesktopNavBar";

const Routing = () => {
  return (
    <BrowserRouter>
      <DesktopNavBar />
      <Routes>
        <Route
          path={routerPaths.noPath}
          element={<Navigate to={routerPaths.home} replace />}
        />
        <Route path={routerPaths.home} element={<HomePage />} />
        <Route path={routerPaths.catFact} element={<CatFactPage />} />
        <Route path={routerPaths.dogImage} element={<DogImagePage />} />
        <Route path={routerPaths.shoppingList} element={<ShoppingListPage />} />
        <Route path={routerPaths.howLongUntil} element={<HowLongPage />} />
        <Route path={routerPaths.football} element={<Football />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
