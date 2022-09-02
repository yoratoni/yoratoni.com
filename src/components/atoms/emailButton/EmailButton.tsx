import React from "react";
import "./EmailButton.css";

import EmailIcon from "@mui/icons-material/Email";


const EmailButton = () => {
    return (
        <a
            className="email-button"
            href="mailto:yoratoni.dev@gmail.com"
            title="Email me"
            target="__blank"
            rel="noreferrer"
        >
            <EmailIcon />
            <p>yoratoni.dev@gmail.com</p>
        </a>
    );
};


export default EmailButton;