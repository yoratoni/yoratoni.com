import React from "react";
import "./SocialBar.css";

import LinkButton from "components/atoms/linkButton/LinkButton";
import EmailButton from "components/atoms/emailButton/EmailButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";


const SocialBar = () => {
    return (
        <div className="social-bar__container" id="contact">
            <div className="social-bar">
                <div className="social-bar__mail">
                    <EmailButton />
                </div>

                <div className="social-bar__li">
                    <LinkButton
                        href="https://github.com/yoratoni"
                        title="@yoratoni on GitHub"
                    ><GitHubIcon /></LinkButton>

                    <LinkButton
                        href="https://www.linkedin.com/in/adrien-bibollet-555354225/"
                        title="Adrien Bibollet's resume on LinkedIn"
                    ><LinkedInIcon /></LinkButton>

                    <LinkButton
                        href="https://www.instagram.com/yoratoni"
                        title="@yoratoni on Instagram"
                    ><InstagramIcon /></LinkButton>

                    <LinkButton
                        href="https://t.me/yoratoni"
                        title="@yoratoni on Telegram"
                    ><TelegramIcon /></LinkButton>
                </div>
            </div>
        </div>
    );
};


export default SocialBar;