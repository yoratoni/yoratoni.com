import React from "react";
import "./Footer.css";

import ScrollToTop from "components/atoms/scrollToTop/ScrollToTop";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Separator from "components/atoms/separator/Separator";


const Footer = () => {
    return (
        <AnimationOnScroll animateIn="animate__fadeIn" duration={1.4} animateOnce={true}>
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
        </AnimationOnScroll>
    );
};


export default Footer;