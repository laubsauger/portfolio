import * as React from 'react';
import {render} from "../../customTestRender";
import matchMedia from "../../matchMedia.mock";
import Navigation from "./Navigation";

describe('Navigation', () => {
  afterEach(() => {
    matchMedia.clear();
  });

  it('renders', () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
