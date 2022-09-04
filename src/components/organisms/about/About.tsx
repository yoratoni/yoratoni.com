import React from "react";
import "./About.css";

import SectionContainer from "components/molecules/sectionContainer/SectionContainer";


const About = () => {
    return (
        <SectionContainer title="About Me" sectionId="about">
            <picture className="about__picture"></picture>

            <p className="about__text">
                Hi! My name is Adrien and I&apos;m a french front-end developer with a passion for
                creating <span>unique</span> designs and digital experiences
            </p>

            <p className="about__text">
                And thanks to the Internet, I discovered all the things that can be done with programming,
                I spent most of my time working on a lot of <span>creative projects</span> in college..
            </p>

            <p className="about__text">
                Fast-forward to today, being a front-end developer is a dream,
                I just love to create and design unique designs and interactive products.
            </p>

            <div className="about__skills">
                <h3>Skills</h3>
                <div className="about__skills-layout">
                    <div className="about__list">
                        <p><span>&raquo;</span> JavaScript&nbsp;(ES6+)</p>
                        <p><span>&raquo;</span> TypeScript</p>
                        <p><span>&raquo;</span> Python</p>
                    </div>
                    <div className="about__list">
                        <p><span>&raquo;</span> React</p>
                        <p><span>&raquo;</span> Node.js</p>
                        <p><span>&raquo;</span> Solidity</p>
                    </div>
                </div>
            </div>

            <div className="about__list">
                <h3>Bio</h3>
                <p>
                    <span>2001</span>
                    Born in Annecy, France.
                </p>
                <p>
                    <span>2019</span>
                    Went to the university Savoie Mont-Blanc to obtain a B.S. in Computer Science.
                </p>
                <p>
                    <span>2021</span>
                    I dropped out &apos;cause I&apos;m a piece of shit.
                </p>
                <p>
                    <span>2044</span>
                    J&apos;suis sous Salvia depuis 2022, j&apos;vois plus rien mon reuf
                </p>
            </div>
        </SectionContainer>
    );
};


export default About;