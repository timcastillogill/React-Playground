import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routerPaths } from "./paths";
import CatFact from "../components/CatFact/CatFact";
import HomePage from "../pages/HomePage";
import DogImage from "../components/DogImage/DogImage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routerPaths.noPath}
          element={<Navigate to={routerPaths.home} replace />}
        />
        <Route path={routerPaths.home} element={<HomePage />} />
        <Route path={routerPaths.catFact} element={<CatFact />} />
        <Route path={routerPaths.dogImage} element={<DogImage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
