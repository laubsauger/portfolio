import {useCallback, useContext} from "react";
import {DarkModeSwitch} from "react-toggle-dark-mode";
import {ThemeContext} from "../../contexts/ThemeContext";

export default function DarkModeToggle() {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  const toggleDarkMode = useCallback((checked:boolean) => {
    setColorMode(checked ? 'dark' : 'light');
  }, [ setColorMode ]);

  return (
    <div className='flex items-center justify-end cursor-pointer'
         onClick={() => toggleDarkMode(colorMode !== 'dark')}
    >
      <div className='text-gray-800 dark:text-gray-300 mr-2'>{ colorMode }</div>
      <div>
        <DarkModeSwitch
          checked={colorMode === 'dark'}
          onChange={() => {}}
          size={36}
        />
      </div>
    </div>
  );
};