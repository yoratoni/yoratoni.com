import React from "react";
import "./LoadingScreen.css";


const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="loading-screen__content">
                <h1>LOADING</h1>
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>
        </div>
    );
};


export default LoadingScreen;