import React from "react";
import "./ProjectCard.css";

import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";


const ProjectCard = ({
    sourceCodeLink = null,
    externalLink = null,
    title = "",
    description = "",
    techStack = []
}: IsProjectCard) => {
    const renderedTechStack = techStack.map((data, i) => <p key={i}>{data}</p>);

    return (
        <li className="project-card animate__animated animate__fadeIn">
            <div className="project-card__inner">
                <header>
                    <div className="project-card__top">
                        <StickyNote2Icon />

                        <div className="project-card__links">
                            {
                                sourceCodeLink !== null &&
                                <a
                                    href={sourceCodeLink}
                                    hrefLang="en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Source code"
                                    className="project-card__link"
                                >
                                    <GitHubIcon />
                                </a>
                            }

                            {
                                externalLink !== null &&
                                <a
                                    href={externalLink}
                                    hrefLang="en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="External Link"
                                    className="project-card__link"
                                >
                                    <OpenInNewIcon />
                                </a>
                            }
                        </div>
                    </div>

                    <div className="project-card__title">
                        {title}
                    </div>

                    <div className="project-card__description">
                        {description}
                    </div>
                </header>

                <footer>
                    {renderedTechStack}
                </footer>
            </div>
        </li>
    );
};


export default ProjectCard;