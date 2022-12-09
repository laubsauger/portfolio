import * as React from 'react';
import Projects from './Projects';
import {render} from "@testing-library/react";

describe('Projects', () => {
  it('renders', () => {
    const { asFragment } = render(<Projects />);
    expect(asFragment()).toMatchSnapshot();
  });
});