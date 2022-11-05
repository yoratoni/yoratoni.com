import React from "react";
import "./AppOverlay.css";

import { pageNumberContext } from "helpers/contexts";

import Navbar from "components/navbar/Navbar";
import Page from "components/page/Page";


const AppOverlay = () => {
    const { pageNumber } = React.useContext(pageNumberContext);

    return (
        <div className="app-overlay">
            <div className="app-overlay__page-container">
                <Page pageNumber={pageNumber} />
            </div>

            <div className="app-overlay__navbar-container">
                <Navbar />
            </div>
        </div>
    );
};


export default AppOverlay;