import React from "react";
import "./Footer.css";

import SocialButton from "components/atoms/socialButton/SocialButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import ScrollToTop from "components/atoms/scrollToTop/ScrollToTop";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__socials">
                <SocialButton
                    href="https://github.com/yoratoni"
                    title="@yoratoni on GitHub"
                ><GitHubIcon /></SocialButton>

                <SocialButton
                    href="https://www.linkedin.com/in/adrien-bibollet-555354225/"
                    title="Adrien Bibollet's resume on LinkedIn"
                ><LinkedInIcon /></SocialButton>

                <SocialButton
                    href="https://www.instagram.com/yoratoni"
                    title="@yoratoni on Instagram"
                ><InstagramIcon /></SocialButton>

                <SocialButton
                    href="https://t.me/yoratoni"
                    title="@yoratoni on Telegram"
                ><TelegramIcon /></SocialButton>
            </div>

            <div className="my-3">
                <ScrollToTop />
            </div>

            <p className="footer__copyrights">
                ©&nbsp;{new Date().getFullYear()}&nbsp;Adrien&nbsp;Bibollet.
                All&nbsp;Rights&nbsp;Reserved.
            </p>
        </footer>
    );
};


export default Footer;