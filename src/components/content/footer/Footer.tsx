import React from "react";
import "./Footer.css";

import Link from "../../others/link/Link";
import Social from "../../others/social/Social";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";


const Footer = () => {
    return (
        <footer className="rcc__squareBackground footer">
            <div className="footer__container">
                <Link
                    otherStyle="mb-2"
                    name="yoratoni.dev@gmail.com"
                    title="Email me"
                    href="mailto:yoratoni.dev@gmail.com"
                    target="_blank"
                />

                <div className="footer__socials">
                    <Social
                        href="/"
                        title="Adrien Bibollet's resume on LinkedIn"
                    ><LinkedInIcon /></Social>

                    <Social
                        href="/"
                        title="@yoratoni on GitHub"
                    ><GitHubIcon /></Social>

                    <Social
                        href="/"
                        title="@yoratoni on Instagram"
                    ><InstagramIcon /></Social>

                    <Social
                        href="/"
                        title="@yoratoni on Telegram"
                    ><TelegramIcon /></Social>
                </div>

                <p className="footer__copyrights">
                    ©&nbsp;Copyright&nbsp;{new Date().getFullYear()}&nbsp;Adrien&nbsp;Bibollet.
                    <br></br>
                    All&nbsp;Rights&nbsp;Reserved.
                </p>
            </div>
        </footer>
    );
};


export default Footer;