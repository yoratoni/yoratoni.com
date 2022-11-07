import React from "react";
import "components/pages/Pages.css";
import "./Home.css";


const Home = () => {
    return (
        <div className="pages__container animate__animated animate__fadeIn animate__fast">
            <main className="pages__main">
                <header className="pages__header">
                    <h1 className="pages__header-title">
                    adrien bibollet
                    </h1>
                    <h3 className="pages__header-subtitle">
                        &#91;full stack web developer&#93;
                    </h3>
                </header>
            </main>
        </div>
    );
};


export default Home;