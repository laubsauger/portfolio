import * as React from 'react';
import LoadingSpinner from './LoadingSpinner';
import {render} from "@testing-library/react";

describe('LoadingSpinner', () => {
  it('renders', () => {
    const { asFragment } = render(<LoadingSpinner />);
    expect(asFragment()).toMatchSnapshot();
  });
});