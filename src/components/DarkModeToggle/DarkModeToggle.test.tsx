import * as React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DarkModeToggle from './DarkModeToggle';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query:string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});

test('initializes as dark by default', () => {
  render(<DarkModeToggle/>);

  const isDark = screen.queryByText('dark');
  expect(isDark).toBeTruthy();

  const isLight = screen.queryByText('light');
  expect(isLight).toBeFalsy();
});
//
// test('initializes with localStorage setting if present', () => {
//   render(<DarkModeToggle/>);
//
//   const isDark = screen.queryByText('dark');
//   expect(isDark).toBeTruthy();
//
//   const isLight = screen.queryByText('light');
//   expect(isLight).toBeFalsy();
// });



