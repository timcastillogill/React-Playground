import { render, screen } from "@testing-library/react";
import React from "react";
import DogImage from "./DogImage";
import useDogImage from "../../Hooks/useDogImage";

jest.mock("../../Hooks/useDogImage");
const mockedDogImage = jest.mocked<typeof useDogImage>(useDogImage);

describe("Given a dog image is rendered without error", () => {
  beforeEach(() => {
    const DOG_IMAGE_URL = "www.whatadog.com";
    mockedDogImage.mockReturnValue({
      isLoading: false,
      hasError: false,
      dogImage: DOG_IMAGE_URL,
      fetchDogImage: jest.fn(),
    });
  });

  test("the text 'click me' is rendered on the screen", () => {
    render(<DogImage />);

    const clickMeText = screen.getByRole("heading", { level: 3 });
    expect(clickMeText).toBeInTheDocument();
  });

  test("an image is rendered on screen when component is mounted", () => {
    render(<DogImage />);

    const dogImage = screen.getByRole("button");
    expect(dogImage).toBeInTheDocument();
  });
});

describe("Given a dog image is not rendered", () => {
  test("the error message should show if the state shows an error", () => {
    const DOG_IMAGE_URL = "www.whatadog.com";
    mockedDogImage.mockReturnValue({
      isLoading: false,
      hasError: true,
      dogImage: DOG_IMAGE_URL,
      fetchDogImage: jest.fn(),
    });
    render(<DogImage />);

    const dogImageError = screen.getByText(/sorry, dog image not found\.\./i);
    expect(dogImageError).toBeInTheDocument();
  });
});
