import React from "react";
import "./SocialBar.css";

import IconHyperlink from "components/atoms/iconHyperlink/IconHyperlink";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";


const SocialBar = () => {
    return (
        <div className="social-bar">
            <IconHyperlink
                href="https://github.com/yoratoni"
                title="@yoratoni on Github"
            >
                <GitHubIcon />
            </IconHyperlink>

            <p>|</p>
            <IconHyperlink
                href="https://www.linkedin.com/in/adrien-bibollet-555354225/"
                title="Adrien Bibollet on LinkedIn"
            >
                <LinkedInIcon />
            </IconHyperlink>

            <p>|</p>
            <IconHyperlink
                href="https://www.instagram.com/yoratoni/?hl=en"
                title="@yoratoni on Instagram"
            >
                <InstagramIcon />
            </IconHyperlink>

            <p>|</p>
            <IconHyperlink
                href="mailto:yoratoni.dev@gmail.com"
                title="yoratoni.dev@gmail.com"
            >
                <EmailIcon />
            </IconHyperlink>
        </div>
    );
};


export default SocialBar;