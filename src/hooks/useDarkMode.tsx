import {useEffect, useState} from "react";

export default function useDarkMode()  {
  const [ theme, setTheme ] = useState<string>(localStorage.theme || 'dark');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const rootEl = window.document.documentElement;
    rootEl.classList.remove(colorTheme);
    rootEl.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [ theme, colorTheme ]);

  return { colorTheme, setTheme };
}