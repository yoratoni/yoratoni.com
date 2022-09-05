import React from "react";
import "./ProjectElement.css";

import LinkButton from "components/atoms/linkButton/LinkButton";

import DescriptionIcon from "@mui/icons-material/Description";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";


const ProjectElement = () => {
    return (
        <div className="project-element">
            <header>
                <div className="project-element__top">
                    <div className="project-element__icon">
                        <DescriptionIcon />
                    </div>

                    <div className="project-element__links">
                        <LinkButton>
                            <GitHubIcon />
                        </LinkButton>

                        <LinkButton>
                            <OpenInNewIcon />
                        </LinkButton>
                    </div>
                </div>

                <h3 className="project-element__title">
                    Test
                </h3>

                <div className="project-element__description">
                    <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                </div>
            </header>

            <footer>
                <ul className="project-element__techs">
                    <li>Python</li>
                    <li>Solidity</li>
                    <li>PHP</li>
                </ul>
            </footer>
        </div>
    );
};


export default ProjectElement;