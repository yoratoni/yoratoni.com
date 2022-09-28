import React from "react";
import "./Footer.css";

import ScrollToTop from "components/atoms/scrollToTop/ScrollToTop";
import Separator from "components/atoms/separator/Separator";


const Footer = () => {
    return (
        <footer className="footer">
            <ScrollToTop />
            <Separator subheading="<footer> </footer>" />


            <div className="footer__content">
                <div className="footer__copyrights-credits">
                    <p>
                        © Copyright {new Date().getFullYear()}
                        <a
                            href="./"
                            target="_self"
                        >
                            Adrien Bibollet.
                        </a>
                    </p>

                    <p>
                        Parallax background made by
                        <a
                            href="https://digitalmoons.itch.io/"
                            hrefLang="en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Digital Moons.
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};


export default Footer;