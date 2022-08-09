import React from "react";

// General App Styles
import "./styles/fonts.css";
import "./styles/main.css";

// Main Components
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