import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Toggler() {
	const [theme, setTheme] = useDarkMode();
	const [isDarkMode, setDarkMode] = useState(theme === "dark");   // react-toggle-dark-mode require a checked value, and if it is false, it will show sun, else moon
    //console.log(window.innerWidth);
	
	const toggleDarkMode = () => {
		setTheme(theme === "dark" ? "light" : "dark");
		setDarkMode(!isDarkMode);
	};

	return (
		<DarkModeSwitch
			onChange={toggleDarkMode}
			checked={isDarkMode}
			size={20}
		/>
	);
}
