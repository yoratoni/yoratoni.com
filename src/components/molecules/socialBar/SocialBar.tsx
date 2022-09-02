import React from "react";
import "./SocialBar.css";

import SocialButton from "components/atoms/socialButton/SocialButton";
import EmailButton from "components/atoms/emailButton/EmailButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";


const SocialBar = () => {
    return (
        <div className="social-bar" id="contact">
            <div className="social-bar__mail">
                <EmailButton />
            </div>

            <div className="social-bar__li">
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
        </div>
    );
};


export default SocialBar;