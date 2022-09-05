import React from "react";
import "./Work.css";

import SectionContainer from "components/molecules/sectionContainer/SectionContainer";
import ProjectElement from "components/molecules/projectElement/ProjectElement";


const Work = () => {
    return (
        <SectionContainer title="My Projects" sectionId="work">
            <h2 className="work__category-title">Web</h2>

            <ul className="work__project-grid">
                <ProjectElement />
                <ProjectElement />
            </ul>

            <h2 className="work__category-title">Others</h2>
            <ul className="work__project-grid">
                <ProjectElement />
                <ProjectElement />
            </ul>
        </SectionContainer>
    );
};


export default Work;