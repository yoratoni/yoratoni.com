// import { Route, Routes, Link, Navigate } from "react-router-dom";
import React from "react";

// Pages
// import Homepage from "./pages/Homepage";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Error from "./pages/Error";

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