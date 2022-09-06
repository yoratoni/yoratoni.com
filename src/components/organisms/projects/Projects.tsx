import React from "react";
import "./Projects.css";

import SectionContainer from "components/molecules/sectionContainer/SectionContainer";
import ProjectCard from "components/molecules/projectCard/ProjectCard";


const Projects = () => {
    const test = {
        github: "/",
        live: "/",
        title: "test",
        description: "TEST",
        techs: [ "Python", "Solidity", "Your sister" ]
    };


    return (
        <SectionContainer title="My Projects" sectionId="projects">
            <ul className="projects__grid">
                {/* {Array.from({ length: 10 }, (_, i) => <span key={i}>Yo bro</span>)} */}

                <ProjectCard
                    title="dfsv"
                    description=""
                    techs={["pute", "pute", "pute"]}
                />
            </ul>
        </SectionContainer>
    );
};


export default Projects;