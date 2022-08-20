import React from "react";

// General app styles
import "./styles/keyframes.css";
import "./styles/vars.css";
import "./styles/fonts.css";
import "./styles/main.css";

// App layouts
import Background from "./components/layouts/background/Background";
import Content from "./components/layouts/content/Content";

// Mobile 100vh fix
import Div100vh from "react-div-100vh";


const App = () => {
    return (
        <Div100vh>
            <Background />
            <Content />
        </Div100vh>
    );
};


export default App;