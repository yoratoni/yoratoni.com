import React from "react";
import "./ProjectCard.css";

import LinkButton from "components/atoms/linkButton/LinkButton";

import DescriptionIcon from "@mui/icons-material/Description";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";


const ProjectCard = (props: IsPropsProjectCard) => {
    const listTechs = props.techs.map((tech, i) => <li key={i}>{tech}</li>);

    return (
        <div className="project-card">
            <header>
                <div className="project-card__top">
                    <div className="project-card__icon">
                        <DescriptionIcon />
                    </div>

                    <div className="project-card__links">
                        <LinkButton
                            title="Source code"
                            href={props.github}
                        >
                            <GitHubIcon />
                        </LinkButton>

                        <LinkButton
                            title="Live demo"
                            href={props.live}
                        >
                            <OpenInNewIcon />
                        </LinkButton>
                    </div>
                </div>

                <h3 className="project-card__title">
                    {props.title}
                </h3>

                <div className="project-card__description">
                    <p>{props.description}</p>
                </div>
            </header>

            <footer>
                <ul className="project-card__techs">
                    {listTechs}
                </ul>
            </footer>
        </div>
    );
};


export default ProjectCard;