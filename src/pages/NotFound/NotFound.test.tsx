import * as React from 'react';
import NotFound from './NotFound';
import {render} from "@testing-library/react";

describe('NotFound', () => {
  it('renders', () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });
});