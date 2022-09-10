import React from "react";
import "./Contact.css";

import SectionContainer from "components/molecules/sectionContainer/SectionContainer";
import LinkButton from "components/atoms/linkButton/LinkButton";
import TextButton from "components/atoms/textButton/TextButton";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";


const Contact = () => {
    return (
        <SectionContainer title="CONTACT ME" sectionId="contact">
            <div className="contact">
                <div className="contact__mail">
                    <h3>Email Me</h3>
                    <TextButton
                        href="mailto:yoratoni.dev@gmail.com"
                        title="Email me"
                    >
                        <EmailIcon />
                        <p>yoratoni.dev@gmail.com</p>
                    </TextButton>
                </div>

                <div className="contact__on-the-web">
                    <h3>On the Web</h3>
                    <div className="contact__on-the-web-links">
                        <TextButton
                            href="mailto:yoratoni.dev@gmail.com"
                            title="Email me"
                        >
                            <GitHubIcon />
                            <p>@yoratoni on Github</p>
                        </TextButton>

                        <TextButton
                            href="mailto:yoratoni.dev@gmail.com"
                            title="Email me"
                        >
                            <LinkedInIcon />
                            <p>LinkedIn</p>
                        </TextButton>

                        <TextButton
                            href="mailto:yoratoni.dev@gmail.com"
                            title="Email me"
                        >
                            <InstagramIcon />
                            <p>Instagram</p>
                        </TextButton>

                        <TextButton
                            href="mailto:yoratoni.dev@gmail.com"
                            title="Email me"
                        >
                            <TelegramIcon />
                            <p>Telegram</p>
                        </TextButton>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};


export default Contact;