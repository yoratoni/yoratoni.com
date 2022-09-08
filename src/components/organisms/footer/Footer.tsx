import React from "react";
import "./Footer.css";

import SquareContainer from "components/atoms/squareContainer/SquareContainer";
import ScrollToTop from "components/atoms/scrollToTop/ScrollToTop";
import SocialBar from "components/molecules/socialBar/SocialBar";


const Footer = () => {
    return (
        <footer>
            <SquareContainer
                style="border-t-4 pb-6 border-[color:var(--secondary)] flex flex-col items-center justify-center px-5"
            >
                <ScrollToTop />
                <SocialBar />

                <p className="footer__copyrights">
                    <span>©&nbsp;</span>{new Date().getFullYear()}&nbsp;ADRIEN&nbsp;BIBOLLET.
                    <br></br>
                    Built&nbsp;From&nbsp;Scratch.
                </p>
            </SquareContainer>
        </footer>
    );
};


export default Footer;