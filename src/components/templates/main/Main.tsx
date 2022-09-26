import React from "react";
import "./Main.css";

import Section from "components/molecules/section/Section";


const Main = () => {
    return (
        <main className="main">
            <Section className="main__section">
                <div className="main__section-title-container">
                    <hr />
                    <h2>About Me</h2>
                    <hr />
                </div>

                <div className="main__section-description-container">
                    <hr />
                    <p>Me, myself and I</p>
                    <hr />
                </div>

                <div className="main__section-paragraph-container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nihil iusto corrupti sit minima? Inventore minus, veritatis sunt nesciunt quam voluptates maxime debitis a? Quis aperiam sunt illo fuga error?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nihil iusto corrupti sit minima? Inventore minus, veritatis sunt nesciunt quam voluptates maxime debitis a? Quis aperiam sunt illo fuga error?</p>
                </div>
            </Section>

            <Section className="main__section">
                <div className="main__section-title-container">
                    <hr />
                    <h2>Works</h2>
                    <hr />
                </div>

                <div className="main__section-description-container">
                    <hr />
                    <p>Some things I&apos;ve built for my clients</p>
                    <hr />
                </div>
            </Section>

            <Section className="main__section">
                <div className="main__section-title-container">
                    <hr />
                    <h2>Personal Projects</h2>
                    <hr />
                </div>

                <div className="main__section-description-container">
                    <hr />
                    <p>Here&apos;s some personal projects that I work on during my free time</p>
                    <hr />
                </div>
            </Section>
        </main>
    );
};


export default Main;