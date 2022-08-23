import React from "react";

// General app styles
import "./styles/vars.css";
import "./styles/fonts.css";
import "./styles/main.css";

// App layouts
import Background from "./layouts/background/Background";
import Content from "./layouts/Content";


const App = () => {
    return (
        <>
            <Background />
            <Content />
        </>
    );
};


export default App;