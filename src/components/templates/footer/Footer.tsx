import React from "react";
import "./Footer.css";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import IconButton from "components/atoms/iconButton/IconButton";
import Navbar from "components/organisms/navbar/Navbar";
import SocialBar from "components/organisms/socialBar/SocialBar";


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
                <hr />
                <div className="footer_scroll-to-top-button">
                    <IconButton
                        title="Scroll to top"
                        onClick={scrollToTop}
                    >
                        <KeyboardDoubleArrowUpIcon />
                    </IconButton>
                </div>
                <hr />
            </div>

            <div className="footer__navbar-container">
                <Navbar />
            </div>

            <div className="footer__social-bar-container">
                <SocialBar />
            </div>

            <div className="footer__credits-container">
                <p>© Copyright {new Date().getFullYear()} Adrien Bibollet.</p>
            </div>
        </footer>
    );
};


export default Footer;