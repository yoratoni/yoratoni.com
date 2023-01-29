import React from "react";
import "./AppOverlay.css";

import { pageNumberContext } from "helpers/contexts";

import Navbar from "components/navbar/Navbar";

import Home from "pages/home/Home";
import About from "pages/about/About";
import Contact from "pages/contact/Contact";
import Work from "pages/work/Work";


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
                className="app-overlay__page animate__animated animate__fadeIn"
            >
                {pageComponent}
            </div>
        );
    };

    return (
        <div className="app-overlay">
            {getCurrentPage()}

            <div className="app-overlay__bar">
                <Navbar />
            </div>
        </div>
    );
};


export default AppOverlay;