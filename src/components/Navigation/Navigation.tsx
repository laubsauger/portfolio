import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Navigation() {
  return (
    <nav className="grid grid-cols-2 w-full place-content-between items-center p-2">
      <h4 className="text-gray-800 dark:text-gray-300">Portfolio</h4>
      <DarkModeToggle />
    </nav>
  )
}