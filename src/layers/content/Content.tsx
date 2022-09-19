import React from "react";
import "./Content.css";

import Header from "components/organisms/header/Header";
import useLocalStorage from "use-local-storage";


const Content = () => {
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [ theme, setTheme ] = useLocalStorage("theme", defaultDark ? "dark" : "light");

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <div className="content" data-theme={theme}>
            <button onClick={switchTheme} className="absolute z-50 bg-black">
                Switch to {theme === "light" ? "dark" : "light"} Theme
            </button>

            <Header />


        </div>
    );
};


export default Content;