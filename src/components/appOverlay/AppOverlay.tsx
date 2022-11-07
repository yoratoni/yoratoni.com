import React from "react";
import "./AppOverlay.css";

import { pageNumberContext } from "helpers/contexts";

import Navbar from "components/navbar/Navbar";
import Home from "components/pages/home/Home";
import About from "components/pages/about/About";
import Contact from "components/pages/contact/Contact";
import Work from "components/pages/work/Work";


const AppOverlay = () => {
    const { pageNumber } = React.useContext(pageNumberContext);

    const getCurrentPage = () => {
        switch (pageNumber) {
            case 0:
                return <Home />;
            case 1:
                return <Work />;
            case 2:
                return <About />;
            case 3:
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="app-overlay">
            <div className="app-overlay__page-container">
                <div className="app-overlay__page">
                    {getCurrentPage()}
                </div>
            </div>

            <div className="app-overlay__navbar-container">
                <Navbar />
            </div>
        </div>
    );
};


export default AppOverlay;