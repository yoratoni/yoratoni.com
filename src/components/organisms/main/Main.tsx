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
                <div className="main__about-me">
                    <p>
                        Hi my name is Adrien, I&apos;m a freelance and a full-stack web
                        developer based in France who loves to help people and communities by creating
                        unique websites and a lot of other stuff but let me give you too much
                        information about how my freelance career started:
                    </p>

                    <p>
                        My interest in art started back when I discovered a conference on Youtube called
                        <a
                            href="https://www.youtube.com/watch?v=6avJHaC3C2U"
                            hrefLang="en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            &nbsp;The&nbsp;Art&nbsp;Of&nbsp;Code
                        </a>,
                        I immediately loved the idea of creating a whole Universe
                        of visualizations with code. It also gave me a lot of
                        practice with different softwares and techs
                        (Yeah, I did that almost 8 hours/day during weekends).
                    </p>
                    <p>
                        Fast-forward to today, I&apos;m specializing in building
                        art-focused incredible digital experiences for a variety of clients
                        including myself on the weekends.
                    </p>

                    <div className="main__skills">
                        <p>Here&apos;s some technologies that I use pretty frequently:</p>

                        <ul>
                            <li>Javascript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>Node JS</li>
                            <li>Python</li>
                            <li>Apache</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
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