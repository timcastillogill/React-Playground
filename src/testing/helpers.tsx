import { act, render, waitFor } from "@testing-library/react";
import React from "react";
import { ReactElement } from "react";

export async function renderWithUseEffect(el: ReactElement) {
  await act(async () => {
    render(el);
    const useEffectSpy = jest.spyOn(React, "useEffect");
    await waitFor(() => expect(useEffectSpy).toHaveReturned);
  });
}
