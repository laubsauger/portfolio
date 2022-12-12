import * as React from 'react';
import {screen, render, waitFor} from "@testing-library/react";
import matchMedia from "../../matchMedia.mock";
import App from "./App";

describe('App', () => {
  afterEach(() => {
    matchMedia.clear();
  });

  it('renders home page route', async () => {
    const {asFragment} = render(<App />);

    await waitFor(() => {
      const themeProvider = screen.getByTestId('home-page');
      expect(themeProvider).toBeTruthy()
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
