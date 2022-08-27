import React from "react";

// General app styles
import "./styles/vars.css";
import "./styles/fonts.css";
import "./styles/main.css";
import "./styles/rcc.css";

// App layers
import Background from "./components/background/Background";
import Content from "./components/content/Content";


const App = () => {
    return (
        <>
            <Background />
            <Content />
        </>
    );
};


export default App;