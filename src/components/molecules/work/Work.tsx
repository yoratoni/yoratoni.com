import React from "react";
import "./Work.css";

import MainSection from "components/atoms/mainSection/MainSection";
import ProjectCard from "components/atoms/projectCard/ProjectCard";
import { workCardData } from "scripts/dicts";


const Work = () => {
    const renderedWorkCardData = workCardData.map(
        (data, i) => <ProjectCard key={i} {...data} />
    );

    return (
        <MainSection
            heading="Work"
            subheading="Things I've built for me / my clients"
        >
            <ul className="projects-grid work">
                {renderedWorkCardData}
            </ul>
        </MainSection>
    );
};


export default Work;