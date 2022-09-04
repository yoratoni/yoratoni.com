import React from "react";
import "./Work.css";

import SectionContainer from "components/molecules/sectionContainer/SectionContainer";
import ProjectElement from "components/molecules/projectElement/ProjectElement";


const Work = () => {
    return (
        <SectionContainer title="My Projects" sectionId="work">
            <ul className="work__project-grid">
                <ProjectElement />
                <ProjectElement />
                <ProjectElement />
                <ProjectElement />
                <ProjectElement />
                <ProjectElement />
            </ul>
        </SectionContainer>
    );
};


export default Work;