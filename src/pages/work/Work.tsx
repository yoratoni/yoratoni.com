import React from "react";
import "pages/Pages.css";
import "./Work.css";

import Cards from "components/cards/Cards";


const Work = () => {
    return (
        <div className="pages__container">
            <header className="pages__header">
                <h3 className="pages__header-subtitle">
                    Here&apos;s some of my
                </h3>
                <h1 className="pages__header-title">
                    PROJECTS
                </h1>
                <h3 className="pages__header-subtitle">
                    &gt; The most interesting ones &lt;
                </h3>
            </header>

            <div className="pages__content-container">
                <div className="pages__content">

                </div>
            </div>
        </div>
    );
};


export default Work;