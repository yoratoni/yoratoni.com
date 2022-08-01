import React from "react";
import "./Content.css";

import Canvas from "../Canvas";

const Content = () => {
    return (
        <div className="content">
            <div id="canvas-container">
                <Canvas />
            </div>
        </div>
    );
};


export default Content;