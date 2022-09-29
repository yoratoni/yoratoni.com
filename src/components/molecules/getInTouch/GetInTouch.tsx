import React from "react";
import "./GetInTouch.css";

import MainSection from "components/atoms/mainSection/MainSection";
import SocialBar from "components/atoms/socialBar/SocialBar";


const GetInTouch = () => {
    return (
        <MainSection
            heading="Get In Touch"
            subheading="Don't hesitate, my inbox is always open"
        >
            <div className="get-in-touch">
                <p className="get-in-touch__available">CURRENTLY AVAILABLE FOR WORK</p>

                <p>
                    If you <b>want to work with me</b>, if you have any question or if you just want to have
                    a conversation, <b>I’ll get back to you</b> as soon as possible!
                </p>

                <SocialBar />

                <a
                    href="mailto:yoratoni.dev@gmail.com"
                    hrefLang="en"
                    target="_blank"
                    title="Email me"
                    rel="noopener noreferrer"
                >
                    SEND A MESSAGE
                </a>
            </div>
        </MainSection>
    );
};


export default GetInTouch;