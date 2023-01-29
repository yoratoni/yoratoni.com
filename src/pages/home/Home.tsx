import React from "react";
import "pages/Pages.css";
import "./Home.css";


const Home = () => {
    return (
        <div className="pages__container">
            <header className="pages__header">
                <h3 className="pages__header-subtitle">
                    Hi there!
                </h3>
                <h1 className="pages__header-title">
                    I&apos;M ADRIEN
                </h1>
                <h3 className="pages__header-subtitle">
                    &gt; Full stack web developer &lt;
                </h3>
            </header>
        </div>
    );
};


export default Home;