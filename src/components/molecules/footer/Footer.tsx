import React from "react";
import "./Footer.css";

import SquareContainer from "components/atoms/squareContainer/SquareContainer";
import ScrollToTop from "components/atoms/scrollToTop/ScrollToTop";

const Footer = () => {
    return (
        <>
            <div className="flex justify-center w-full mb-8">
                <ScrollToTop />
            </div>

            <SquareContainer>
                <footer className="footer">
                    <p className="footer__copyrights">
                        <span>©</span>&nbsp;{new Date().getFullYear()}&nbsp;Adrien&nbsp;Bibollet.
                    </p>
                </footer>
            </SquareContainer>
        </>
    );
};


export default Footer;