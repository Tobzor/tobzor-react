// Dependencies
import React from "react";
// Locals
import useDarkMode from "../../hooks/useDarkMode";
import Toggle from "../Toggle";

const DarkModeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    return <Toggle checked={darkMode} onChange={() => setDarkMode(c => !c)} />;
};

export default DarkModeToggle;
