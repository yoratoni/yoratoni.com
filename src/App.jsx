import React from "react";

// Main components
import Content from "./components/layouts/Content";
import Frame from "./components/layouts/Frame";

// General App Styles
import "./styles/fonts.css";
import "./styles/main.css";


const App = () => {
    return (
        <>
            <Frame />
            <Content />
        </>
    );
};


export default App;