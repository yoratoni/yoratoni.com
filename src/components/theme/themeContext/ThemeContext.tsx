import React from "react";

import { appThemes } from "scripts/dicts";


const ThemeContext = React.createContext<IsThemeContext>(
    { theme: appThemes.dark, switchTheme: null }
);


export default ThemeContext;