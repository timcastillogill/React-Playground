import React, { useEffect, useState } from "react";
import "./DogImage.css";

const DogImage = () => {
    const [dogImage, setDogImage] = useState("");

    const dogImageCollector = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => setDogImage(data.message));
    };

    useEffect(dogImageCollector, []);

    const refreshDog = () => {
        dogImageCollector();
    };

    return (
        <section className="dogImageSection">
            <div className="dogImage">
                <button onClick={refreshDog}>
                    <img src={dogImage} alt="Random dog" />
                </button>
            </div>
            <h3>Click me! 👆</h3>
        </section>
    );
};

export default DogImage;
