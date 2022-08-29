import React from "react";
import "./Footer.css";

import Link from "../../others/link/Link";
import Social from "../../others/social/Social";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import ScrollToTop from "../../others/scrollToTop/ScrollToTop";



const Footer = () => {
    return (
        <footer className=" footer">
            <Link
                otherStyle="w-full flex items-center justify-center mb-4"
                name="yoratoni.dev@gmail.com"
                title="Email me"
                href="mailto:yoratoni.dev@gmail.com"
                target="_blank"
            />

            <div className="footer__socials">
                <Social
                    href="https://github.com/yoratoni"
                    title="@yoratoni on GitHub"
                ><GitHubIcon /></Social>

                <Social
                    href="https://www.linkedin.com/in/adrien-bibollet-555354225/"
                    title="Adrien Bibollet's resume on LinkedIn"
                ><LinkedInIcon /></Social>

                <Social
                    href="https://www.instagram.com/yoratoni"
                    title="@yoratoni on Instagram"
                ><InstagramIcon /></Social>

                <Social
                    href="https://t.me/yoratoni"
                    title="@yoratoni on Telegram"
                ><TelegramIcon /></Social>
            </div>

            <ScrollToTop />

            <p className="footer__copyrights">
                ©&nbsp;{new Date().getFullYear()}&nbsp;Adrien&nbsp;Bibollet.
                All&nbsp;Rights&nbsp;Reserved.
            </p>
        </footer>
    );
};


export default Footer;