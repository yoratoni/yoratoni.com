import React from "react";
import "styles/main.css";

// CSS Libs
import "animate.css/animate.min.css";

// General app styles
import "styles/fonts.css";
import "styles/library.css";
import "styles/vars.css";
import "styles/main.css";

// App layers
import Header from "components/templates/header/Header";

// Theme provider (react context) wrapper
import ThemeContext from "components/atoms/themeContext/ThemeContext";


const App = () => {
    const { theme } = React.useContext(ThemeContext);

    return (
        <div className="app" data-theme={theme}>
            <Header />
        </div>
    );
};


export default App;