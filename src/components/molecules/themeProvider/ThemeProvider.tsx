import React from "react";

import useLocalStorageState from "use-local-storage-state";
import ThemeContext from "components/atoms/themeContext/ThemeContext";
import { appThemes } from "scripts/dicts";


const ThemeProvider = ({ children }: IsWithChildren) => {
    const isDefaultOSDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = isDefaultOSDark ? appThemes.dark : appThemes.light;

    React.useEffect(()=>{
        document.documentElement.style.setProperty("color-scheme", `${defaultTheme}`);
    }, []);

    const [ theme, setTheme ] = useLocalStorageState<string>(
        appThemes.localStorageKey,
        { defaultValue: defaultTheme }
    );

    const switchTheme = () => {
        const newTheme = theme === appThemes.light ? appThemes.dark : appThemes.light;
        document.documentElement.style.setProperty("color-scheme", `${newTheme}`);
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export default ThemeProvider;