import * as React from 'react';
import {screen} from '@testing-library/react';
import {render} from '../../customTestRender';
import userEvent from '@testing-library/user-event';
import matchMedia from "../../matchMedia.mock";
import DarkModeToggle from './DarkModeToggle';

describe('DarkModeToggle', () => {
  afterEach(() => {
    matchMedia.clear();
  });

  it('renders', () => {
    const { asFragment } = render(<DarkModeToggle />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('initializes as "dark" by default',  () => {
    matchMedia.useMediaQuery('');

    render(<DarkModeToggle/>);

    const isDark = screen.queryByText('dark');
    expect(isDark).toBeTruthy();
  });

  it('initializes as "light" if OS preference/media query is set', () => {
    matchMedia.useMediaQuery('(prefers-color-scheme: light)');

    render(<DarkModeToggle/>);

    const isDark = screen.queryByText('dark');
    expect(isDark).toBeFalsy();
  });

  it('initializes as "dark" if OS preference/media query is set', () => {
    matchMedia.useMediaQuery('(prefers-color-scheme: dark)');
    render(<DarkModeToggle/>);

    const isDark = screen.queryByText('dark');
    expect(isDark).toBeTruthy();
  });

  it('initializes with localStorage "light" setting if present', () => {
    window.localStorage.setItem('color-mode', 'light');

    render(<DarkModeToggle/>);

    const isDark = screen.queryByText('dark');
    expect(isDark).toBeFalsy();
  });

  it('initializes with localStorage "dark" setting if present', () => {
    window.localStorage.setItem('color-mode', 'dark');

    render(<DarkModeToggle/>);

    const isDark = screen.queryByText('dark');
    expect(isDark).toBeTruthy();
  });

  it('prefers localStorage setting over OS/mq', () => {
    window.localStorage.setItem('color-mode', 'dark');
    const mediaQuery = '(prefers-color-scheme: light)';
    matchMedia.useMediaQuery(mediaQuery);

    render(<DarkModeToggle/>);

    const isDark = screen.queryByText('dark');
    expect(isDark).toBeTruthy();
  });

  it('toggles mode on button click', async () => {
    const mediaQuery = '(prefers-color-scheme: dark)';
    matchMedia.useMediaQuery(mediaQuery);

    const user = userEvent.setup();

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

  it('persists current mode to localStorage', () => {
    const existingPersistedColorMode = window.localStorage.getItem('color-mode');
    expect(existingPersistedColorMode).toBeNull();

    render(<DarkModeToggle/>);

    const savedColorMode = window.localStorage.getItem('color-mode');
    expect(savedColorMode).toEqual('dark');

    const isDark = screen.queryByText('dark');
    expect(isDark).toBeTruthy();
  });
});



