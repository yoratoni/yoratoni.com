import React from "react";
import "./Header.css";

import MainParallax from "components/organisms/mainParallax/MainParallax";
import Navbar from "components/organisms/navbar/Navbar";
import SocialBar from "components/organisms/socialBar/SocialBar";


const Header = () => {
    return (
        <header className="header">
            <div className="header__parallax-container">
                <MainParallax />
            </div>

            <Navbar />

            <div className="header__heading-container">
                <div className="header__heading">
                    <hr />
                    <h1>ADRIEN&nbsp;BIBOLLET</h1>
                    <hr />
                </div>
                <h2>FREELANCE FRONT-END DEVELOPER</h2>
            </div>

            <div className="header__intro-container">
                <hr />
                <div className="header__intro">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <hr />
            </div>

            <div className="header__social-bar-container">
                {/* <SocialBar /> */}
            </div>
        </header>
    );
};


export default Header;