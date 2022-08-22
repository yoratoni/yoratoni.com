import React from "react";
import "./Social.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";


const Social = () => {
    const props = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "38px"
    };

    return (
        <div className="w-14 h-48 flex items-center justify-around flex-col">
            <a href="https://github.com/yoratoni" rel="noreferrer" target="_blank">
                <GitHubIcon sx={{ ...props }} />
            </a>

            <a href="https://github.com/yoratoni" rel="noreferrer" target="_blank">
                <LinkedInIcon sx={{ ...props }} />
            </a>

            <a href="https://github.com/yoratoni" rel="noreferrer" target="_blank">
                <InstagramIcon sx={{ ...props }} />
            </a>
        </div>
    );
};


export default Social;