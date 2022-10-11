import React from "react";
import "./AppOverlay.css";

import Navbar from "components/atoms/navbar/Navbar";


const AppOverlay = ({
    pageNumber
}: IsAppOverlay) => {
    return (
        <div className="app-overlay">

            <div className="app-overlay__navbar-container">
                <Navbar />
            </div>
        </div>
    );
};


export default AppOverlay;