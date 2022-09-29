import React from "react";
import "./Header.css";

import HeaderParallax from "components/atoms/headerParallax/HeaderParallax";
import MainHeading from "components/atoms/mainHeading/MainHeading";


const Header = () => {
    return (
        <header className="header">
            <div className="header__parallax">
                <HeaderParallax />
            </div>

            <div className="header__content">
                <div className="header__central animate__animated animate__fadeIn">
                    <MainHeading />

                    <div className="header__central-intro animate__animated animate__fadeInUp">
                        <p>
                            Hi, I&apos;m a freelance web developer based in France
                            with a passion for art-focused programming and web designing.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;