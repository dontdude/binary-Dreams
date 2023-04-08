import { useState, useEffect } from "react";

export default function useDarkMode() {
	const [theme, setTheme] = useState(localStorage.theme || "dark");

	useEffect(() => {
		const root = window.document.documentElement;

		if(theme === "dark"){
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}

        localStorage.setItem('theme', theme);
		
	}, [theme]);

	return [theme, setTheme]
}
