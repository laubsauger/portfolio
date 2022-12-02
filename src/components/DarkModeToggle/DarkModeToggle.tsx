import useDarkMode from "../../hooks/useDarkMode";
import {useState} from "react";
import {DarkModeSwitch} from "react-toggle-dark-mode";

export default function DarkModeToggle() {
  const { colorTheme, setTheme } = useDarkMode();
  const [ darkMode, setDarkMode ] = useState(colorTheme === 'light');

  const toggleDarkMode = (checked:boolean) => {
    console.log(colorTheme)

    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <div className="flex items-center justify-end">
      <div className='text-gray-800 dark:text-gray-300 mr-2'>{ darkMode ? 'Dark' : 'Light' }</div>
      <div>
        <DarkModeSwitch
          checked={darkMode}
          onChange={toggleDarkMode}
          size={40}
        />
      </div>
    </div>
  )
}