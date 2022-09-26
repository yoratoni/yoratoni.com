import React from "react";
import "./Header.css";

import MainParallax from "components/molecules/mainParallax/MainParallax";
import SocialBar from "components/molecules/socialBar/SocialBar";

// import ThemeButton from "components/molecules/themeButton/ThemeButton";


const Header = () => {
    return (
        <header className="header">
            <div className="header__parallax-container">
                <MainParallax />
            </div>

            <div className="header__central-container">
                <div className="header__heading-container animate__animated animate__fadeInDown">
                    <div className="header__heading">
                        <hr />
                        <div className="header__heading-central">
                            <h1>ADRIEN&nbsp;BIBOLLET</h1>

                            <div className="header__subheading">
                                <hr />
                                <h2>FREELANCE FRONT-END DEVELOPER</h2>
                                <hr />
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>

                <div className="header__intro-container animate__animated animate__fadeInUp">
                    <div className="header__intro">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>

            {/* <ThemeButton /> */}

            <div className="header__social-bar-container animate__animated animate__fadeInUp">
                <SocialBar />
            </div>
        </header>
    );
};


export default Header;