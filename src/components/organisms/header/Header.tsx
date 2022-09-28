import React from "react";
import "./Header.css";

import HeaderParallax from "components/atoms/headerParallax/HeaderParallax";
import MainHeading from "components/atoms/mainHeading/MainHeading";
import Separator from "components/atoms/separator/Separator";


const Header = () => {
    return (
        <header className="header">
            <div className="header__parallax">
                <HeaderParallax />
            </div>

            <div className="header__content">
                <Separator subheading="<header> </header>" />

                <div className="header__central">
                    <MainHeading />

                    <div className="header__central-intro">
                        <p>
                            I&apos;m also an artist, a designer
                            with a passion for art-focused programming, i&apos;m
                            here to create incredible digital experiences.
                        </p>
                    </div>
                </div>

                <hr />
            </div>
        </header>
    );
};


export default Header;