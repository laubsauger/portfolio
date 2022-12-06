import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import {Link} from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 grid grid-cols-2 w-full place-content-between items-center p-2">
      <Link to="/"><h4 className="text-gray-800 dark:text-gray-300">Portfolio</h4></Link>
      <DarkModeToggle />
    </nav>
  )
}