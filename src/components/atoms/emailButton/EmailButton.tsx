import React from "react";
import "./EmailButton.css";

import EmailIcon from "@mui/icons-material/Email";
import SocialButton from "components/atoms/socialButton/SocialButton";


const EmailButton = () => {
    return (
        <div className="email-button">
            
            
            <SocialButton
                href="mailto:yoratoni.dev@gmail.com"
                title="Email me"
            ><EmailIcon /></SocialButton>
        </div>
    );
};


export default EmailButton;