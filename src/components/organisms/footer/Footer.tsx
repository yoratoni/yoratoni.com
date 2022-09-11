import React from "react";
import "./Footer.css";

import ScrollToTop from "components/atoms/scrollToTop/ScrollToTop";
import NavButton from "components/atoms/navButton/NavButton";


const Footer = () => {
    return (
        <footer className="footer">
            <ScrollToTop />

            <div className="footer__navigation">
                <hr></hr>
                <div className="footer__navigation-bar">
                    <NavButton sectionId="home" title="HOME" offset={-96} />
                    <NavButton sectionId="projects" title="PROJECTS" />
                    <NavButton sectionId="about" title="ABOUT" />
                    <NavButton sectionId="contact" title="CONTACT" />
                </div>
                <hr></hr>
            </div>

            <p className="footer__copyrights">
                ©{new Date().getFullYear()}&nbsp;Adrien&nbsp;Bibollet.
                <br></br>
                All&nbsp;Rights&nbsp;Reserved.
            </p>
        </footer>
    );
};


export default Footer;