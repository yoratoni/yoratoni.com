import React from "react";
import "./Footer.css";

import SocialBar from "components/molecules/socialBar/SocialBar";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import IconButton from "components/atoms/iconButton/IconButton";


const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer">
            <div className="footer__scroll-to-top-button-container">
                <div className="footer_scroll-to-top-button">
                    <IconButton
                        title="Scroll to top"
                        onClick={scrollToTop}
                    >
                        <KeyboardDoubleArrowUpIcon />
                    </IconButton>
                </div>
            </div>

            <div className="footer__social-bar-container">
                <p>CONTACT ME</p>
                <SocialBar />
                <p>
                    Don&apos;t hesitate whether you&apos;re looking to work with me,
                    if you have a question about my work or if you just want to have a conversation.
                </p>
            </div>

            <div className="footer__credits-container">
                <p>© Copyright {new Date().getFullYear()} Adrien Bibollet.</p>
                <p>Parallax background by Digital Moons.</p>
            </div>
        </footer>
    );
};


export default Footer;