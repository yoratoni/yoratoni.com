import React from "react";
import "./Main.css";

import ProjectCard from "components/atoms/projectCard/ProjectCard";
import Section from "components/atoms/section/Section";


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
                    <p>Me, myself and I.</p>
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
                    <h2>Work</h2>
                    <hr />
                </div>

                <div className="main__section-description-container">
                    <hr />
                    <p>Some things I&apos;ve built for my clients.</p>
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
                    <p>Some projects I work on during my free time.</p>
                    <hr />
                </div>

                <div className="main__section-card-container">
                    <ProjectCard>pute</ProjectCard>
                    <ProjectCard>pute</ProjectCard>
                    <ProjectCard>pute</ProjectCard>
                </div>
            </Section>
        </main>
    );
};


export default Main;