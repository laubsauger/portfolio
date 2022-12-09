import * as React from 'react';
import Home from './Home';
import {render} from "@testing-library/react";

describe('Home', () => {
  it('renders', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});