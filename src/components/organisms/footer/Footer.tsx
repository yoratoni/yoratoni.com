import React from "react";
import "./Footer.css";

import SquareContainer from "components/atoms/squareContainer/SquareContainer";
import ScrollToTop from "components/atoms/scrollToTop/ScrollToTop";
import SocialBar from "components/molecules/socialBar/SocialBar";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";


const Footer = () => {
    return (
        <footer className="mt-16">
            <SquareContainer
                style="border-t pb-6 border-[color:var(--primary)] flex flex-col items-center justify-center px-5"
            >
                <ScrollToTop />
                <SocialBar />

                <p className="footer__copyrights">
                    <span>©&nbsp;</span>{new Date().getFullYear()}&nbsp;ADRIEN&nbsp;BIBOLLET.
                </p>
            </SquareContainer>
        </footer>
    );
};


export default Footer;