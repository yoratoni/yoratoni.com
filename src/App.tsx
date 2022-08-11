import React from "react";

// General App Styles
import "bulma/css/bulma.min.css";
import "./styles/keyframes.css";
import "./styles/vars.css";
import "./styles/fonts.css";
import "./styles/main.css";

// Main Components
import Background from "./components/background/Background";
import Content from "./components/content/Content";
// import PageProgress from "./components/pageProgress/PageProgress";

// Mobile 100vh fix
import Div100vh from "react-div-100vh";

// Theme
import useLocalStorage from "use-local-storage";



const App = () => {
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark").matches;
    const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

    // const switchTheme = () => {
    //     const newTheme = theme === "light" ? "dark" : "light";
    //     setTheme(newTheme);
    // };

    return (
        <Div100vh>
            <div className="data-theme" data-theme={theme}>
                {/* <button style={{ zIndex: 999 }} className="button" onClick={ switchTheme }>
                switch theme
            </button> */}

                <Background />
                <Content />
            </div>
        </Div100vh>
    );
};


export default App;