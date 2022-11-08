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
        let pageComponent;

        switch (pageNumber) {
            case 0:
                pageComponent = <Home />;
                break;
            case 1:
                pageComponent = <Work />;
                break;
            case 2:
                pageComponent = <About />;
                break;
            case 3:
                pageComponent = <Contact />;
                break;
            default:
                pageComponent = <Home />;
        }

        // Trick: randomize the key to force a re-render triggering the animation
        return (
            <div
                key={Math.random()}
                className="app-overlay__page animate__animated animate__fadeIn animate__fast"
            >
                {pageComponent}
            </div>
        );
    };

    return (
        <div className="app-overlay">
            {getCurrentPage()}

            <div className="app-overlay__navbar">
                <Navbar />
            </div>
        </div>
    );
};


export default AppOverlay;