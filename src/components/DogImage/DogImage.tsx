import React, { useEffect, useState } from "react";
import "./DogImage.css";
import useDogImage from "../../Hooks/useDogImage";

const DogImage = () => {
  const { isLoading, hasError, dogImage, fetchDogImage } = useDogImage();

  //   useEffect(dogImageCollector, []);

  const refreshDog = () => {
    fetchDogImage();
  };

  return (
    <section className="dogImageSection">
      <div className="dogImage">
        {hasError && <p>Sorry, dog image not found..</p>}
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <button onClick={refreshDog}>
            <img src={dogImage} alt="Random dog" />
          </button>
        )}
      </div>
      <h3>Click me! 👆</h3>
    </section>
  );
};

export default DogImage;
