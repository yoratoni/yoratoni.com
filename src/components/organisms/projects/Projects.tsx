import React from "react";
import "./Projects.css";

import SectionContainer from "components/molecules/sectionContainer/SectionContainer";
import ProjectCard from "components/molecules/projectCard/ProjectCard";
import ProjectCardDataArray from "database/database";


const Projects = () => {
    const projectCards = ProjectCardDataArray.map((projectCardData, i) => <ProjectCard {...projectCardData} key={i} />);

    return (
        <SectionContainer title="MY PROJECTS" sectionId="projects">
            <ul className="projects__grid">
                {projectCards}
            </ul>
        </SectionContainer>
    );
};


export default Projects;