import React from "react";
import "./Social.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";


const Social = () => {
    return (
        <div className="social">
            <div className="social__buttons">
                <a
                    href="https://github.com/yoratoni"
                    className="social__button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="social__button-content">
                        <GitHubIcon />
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/adrien-bibollet-555354225/"
                    className="social__button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="social__button-content">
                        <LinkedInIcon />
                    </div>
                </a>
                <a
                    href="mailto: yoratoni.dev@gmail.com"
                    className="social__button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="social__button-content">
                        <EmailIcon />
                    </div>
                </a>
                <a
                    href="https://www.instagram.com/yoratoni/?hl=en"
                    className="social__button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="social__button-content">
                        <InstagramIcon />
                    </div>
                </a>
            </div>
        </div>
    );
};


export default Social;