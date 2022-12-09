import React, {createContext, useCallback, useEffect, useState} from "react";

function getInitialColorMode():ColorMode {
  // stored user preference
  const persistedColorPreference = window.localStorage.getItem('color-mode') ;
  const hasPersistedPreference = persistedColorPreference === 'light' || persistedColorPreference === 'dark';
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  // OS preference
  const mql = window.matchMedia('(prefers-color-scheme: light)');
  if (mql.matches) {
    return 'light';
  }

  // default
  return 'dark';
}

type Props = {
  children?: React.ReactNode;
}

type ContextType = {
  colorMode: ColorMode,
  setColorMode: (val: ColorMode) => void
}

type ColorMode = 'light' | 'dark';

export const ThemeContext = createContext<ContextType>({
  colorMode: 'dark',
  setColorMode: () => {}
});

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState<ColorMode>(getInitialColorMode);

  const setColorMode = useCallback((value:ColorMode) => {
    rawSetColorMode(value);

    const rootEl = window.document.documentElement;
    rootEl.classList.remove(colorMode);
    rootEl.classList.add(value);

    window.localStorage.setItem('color-mode', value);
  }, [colorMode]);

  useEffect(() => {
    setColorMode(getInitialColorMode())
  }, [setColorMode]);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};