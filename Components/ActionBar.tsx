import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ActionBar = () => {
  const [colorMode, setColorMode] = useState("dark");
  return (
    <div className="flex w-full h-8 bg-gray-200 dark:bg-gray-700">
      <div className="flex px-2 ">
        {colorMode === "dark" ? (
          <FaMoon className="m-auto" />
        ) : (
          <FaSun className="m-auto" />
        )}
      </div>
    </div>
  );
};

export default ActionBar;
