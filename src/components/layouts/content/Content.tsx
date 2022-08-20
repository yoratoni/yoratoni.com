import React from "react";
import "./Content.css";


// Components
import Navbar from "../../navbar/Navbar";


/**
 * Contains the whole website content
 */
const Content = () => {
    return (
        <div className="content-container">
            <Navbar />
        </div>
    );
};


export default Content;