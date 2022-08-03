import React from "react";
import "./Content.css";

import CollatzCanvas from "../CollatzCanvas";

const Content = () => {
    return (
        <div className="content">
            <div id="main-canvas-container">
                <CollatzCanvas />
            </div>
        </div>
    );
};


export default Content;