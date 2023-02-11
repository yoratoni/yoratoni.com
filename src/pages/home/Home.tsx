import React from "react";
import "pages/Pages.css";
import "./Home.css";

import Social from "components/social/Social";


const Home = () => {
    return (
        <div className="pages__container">
            <Social />

            <header className="pages__header">
                <div className="pages__header-content">
                    <h3 className="pages__header-subtitle">
                    Hi there!
                    </h3>
                    <h1 className="pages__header-title">
                    I&apos;M ADRIEN
                    </h1>
                    <h3 className="pages__header-subtitle">
                    &gt; Full stack web developer &lt;
                    </h3>
                </div>
            </header>

            <div className="home__text">
                <p>&gt; Scroll on PC &lt;</p>
                <p>&gt; Swipe on mobile &lt;</p>
                <p>&gt; Background by Digital Moons &lt;</p>
            </div>
        </div>
    );
};


export default Home;