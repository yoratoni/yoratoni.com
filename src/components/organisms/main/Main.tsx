import React from "react";
import "./Main.css";

import MainSection from "components/atoms/mainSection/MainSection";


const Main = () => {
    return (
        <main className="main">
            <MainSection
                heading="About Me"
                subheading="Me, myself and I"
            >
                Pute
            </MainSection>

            <MainSection
                heading="Work"
                subheading="Things I've built for my clients"
            >
                Pute
            </MainSection>

            <MainSection
                heading="Personal Projects"
                subheading="At least the significant ones"
            >
                Pute
            </MainSection>

            <MainSection
                heading="Get In Touch"
                subheading="Don't hesitate, my inbox is always open"
            >
                <p className="main__available">CURRENTLY AVAILABLE FOR WORK</p>

                <p>
                    If you want to work with me, if you have any question or if you just want to have
                    a conversation, I’ll get back to you as soon as possible!
                </p>

                <a
                    href="mailto:yoratoni.dev@gmail.com"
                    hrefLang="en"
                    target="_blank"
                    title="Email me"
                    rel="noopener noreferrer"
                >
                    Send a message
                </a>
            </MainSection>
        </main>
    );
};


export default Main;