import React from "react";
import "./ProjectCard.css";

import IconHyperlink from "components/atoms/iconHyperlink/IconHyperlink";

import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";


const ProjectCard = ({
    children = null,
    className = ""
}: IsWithChildAndClass) => {
    return (
        <section
            className="project-card"
        >
            <div className={`project-card__content-container ${className}`}>
                <div className="project-card__top-container">
                    <StickyNote2Icon />
                    <div className="project-card__links-container">
                        <IconHyperlink><GitHubIcon /></IconHyperlink>
                        <IconHyperlink><OpenInNewIcon /></IconHyperlink>
                    </div>
                </div>
                {children}
            </div>
        </section>
    );
};


export default ProjectCard;