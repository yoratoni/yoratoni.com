import React from "react";
import "./Social.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const Social = () => {
    return (
        <div className="social">
            <div className="social__buttons">
                <a
                    href=""
                    className="social__button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="social__button-content">
                        <GitHubIcon />
                    </div>
                </a>
                <a
                    href=""
                    className="social__button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="social__button-content">
                        <LinkedInIcon />
                    </div>
                </a>
                <a
                    href=""
                    className="social__button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="social__button-content">
                        <EmailIcon />
                    </div>
                </a>
                <a
                    href=""
                    className="social__button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="social__button-content">
                        <InstagramIcon />
                    </div>
                </a>
                <a
                    href=""
                    className="social__button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="social__button-content">
                        <WhatsAppIcon />
                    </div>
                </a>
            </div>
        </div>
    );
};


export default Social;