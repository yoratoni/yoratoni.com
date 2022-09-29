import React from "react";
import "./SocialBar.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


const SocialBar = () => {
    return (
        <div className="social-bar">
            <div className="social-bar__content">
                <a
                    href="https://github.com/yoratoni"
                    hrefLang="en"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="My Github"
                    className="social-bar__link"
                >
                    <GitHubIcon />
                </a>

                <a
                    href="https://www.linkedin.com/in/adrien-bibollet-555354225/"
                    hrefLang="en"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Adrien Bibollet on LinkedIn"
                    className="social-bar__link"
                >
                    <LinkedInIcon />
                </a>

                <a
                    href="https://www.instagram.com/yoratoni/?hl=en"
                    hrefLang="en"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="@yoratoni on Instagram"
                    className="social-bar__link"
                >
                    <InstagramIcon />
                </a>
            </div>
        </div>
    );
};


export default SocialBar;