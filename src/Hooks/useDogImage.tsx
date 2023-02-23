import React, { useEffect, useState } from "react";

const useDogImage = () => {
  const [dogImage, setDogImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const dogImageUrl = process.env.REACT_APP_DOG_IMAGE_URL as RequestInfo;

  const fetchDogImage = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const res = await fetch(dogImageUrl);
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
