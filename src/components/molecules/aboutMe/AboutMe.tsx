import React from "react";
import "./AboutMe.css";

import MainSection from "components/atoms/mainSection/MainSection";


const AboutMe = () => {
    return (
        <MainSection
            heading="About Me"
            subheading="Me, myself and I"
        >
            <div className="about-me">
                <p>
                    Hi, my name is Adrien, I&apos;m a freelance and a full-stack web
                    developer based in France who loves to <b>help</b> people and communities by creating
                    <b> unique</b> websites and a lot of other things. But let me give you a bit too much
                    information about how my <b>freelance</b> career started:
                </p>

                <p>
                    My interest in art started back when I discovered
                    a conference on Youtube called&nbsp;
                    <a
                        href="https://www.youtube.com/watch?v=6avJHaC3C2U"
                        hrefLang="en"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The&nbsp;Art&nbsp;Of&nbsp;Code
                    </a>,
                    I immediately loved the idea of creating a whole Universe
                    of <b>visualizations with code.</b> It also made me <b>practice </b>
                    a lot with different softwares and technologies.
                </p>
                <p>
                    Fast-forward to today, I&apos;m specializing in building
                    <b> art-focused</b> incredible digital experiences for a variety of <b>clients </b>
                    including myself on the weekends.
                </p>

                <div className="about-me__skills">
                    <p>
                        And for those who know what they’re looking for,
                        here&apos; a list of <b>technologies</b> and tools that I&apos;m frequently using:
                    </p>

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
    );
};


export default AboutMe;