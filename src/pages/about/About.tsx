import React from "react";
import "pages/Pages.css";
import "./About.css";


const About = () => {
    return (
        <div className="pages__container">
            <header className="pages__header">
                <h3 className="pages__header-subtitle">
                    Just a little bit info
                </h3>
                <h1 className="pages__header-title">
                    ABOUT ME
                </h1>
                <h3 className="pages__header-subtitle">
                    &gt; More than a web developer &lt;
                </h3>
            </header>

            <div className="pages__content-container">
                <div className="pages__content">
                    <div className="pages__content-text">

                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;