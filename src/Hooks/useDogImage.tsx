import React, { useEffect, useState } from "react";

const useDogImage = () => {
  const [dogImage, setDogImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchDogImage = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await res.json();
      setDogImage(json.message);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDogImage();
  }, [setDogImage]);

  return {
    isLoading,
    hasError,
    dogImage,
    fetchDogImage,
  };
};

export default useDogImage;

// .then((response) => response.json())
// .then((data) => setDogImage(data.message));
