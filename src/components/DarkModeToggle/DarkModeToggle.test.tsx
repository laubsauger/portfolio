import * as React from 'react';
import {screen} from '@testing-library/react';
import {render} from '../../customTestRender';
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

describe('DarkModeToggle', () => {
  it('initializes as dark by default', async () => {
    await window.localStorage.clear();

    render(<DarkModeToggle/>);

    const isDark = screen.queryByText('dark');
    expect(isDark).toBeTruthy();
  });

  // it('uses OS setting/mq when preference is "')

  it('initializes with localStorage "light" setting if present', async () => {
    await window.localStorage.clear();
    window.localStorage.setItem('color-mode', 'light');

    render(<DarkModeToggle/>);

    const isDark = screen.queryByText('dark');
    expect(isDark).toBeFalsy();
  });

  it('initializes with localStorage "dark" setting if present', async () => {
    await window.localStorage.clear();
    window.localStorage.setItem('color-mode', 'dark');

    render(<DarkModeToggle/>);

    const isDark = screen.queryByText('dark');
    expect(isDark).toBeTruthy();
  });

  it('toggles mode on button click', async () => {
    window.localStorage.clear();
    const user = userEvent.setup()

    render(<DarkModeToggle/>);

    const isDark = screen.queryByText('dark');
    expect(isDark).toBeTruthy();

    if (isDark) {
      await user.click(isDark);
    }

    const isLight = screen.queryByText('light');
    expect(isLight).toBeTruthy();

    if (isLight) {
      await user.click(isLight);
    }

    const isDarkAgain = screen.queryByText('dark');
    expect(isDarkAgain).toBeTruthy();
  });

  it('persists current mode to localStorage', async () => {
    await window.localStorage.clear();

    const existingPersistedColorMode = window.localStorage.getItem('color-mode');
    expect(existingPersistedColorMode).toBeNull();

    render(<DarkModeToggle/>);

    const savedColorMode = window.localStorage.getItem('color-mode');
    expect(savedColorMode).toEqual('dark');
  });
});

// @todo: add testcase for when localstorage is not set but the media query is doing it's thing




