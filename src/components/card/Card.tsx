import React from "react";
import "./Card.css";

import IconComp from "components/iconComp/IconComp";
import { cardNameContext } from "helpers/contexts";


const Card = ({
    title,
    icon,
    techStack = []
}: IsCard) => {
    const { setCardName } = React.useContext(cardNameContext);

    const updateCardName = (e: React.MouseEvent<HTMLButtonElement>) => {
        const cardName = e.currentTarget.getElementsByClassName("card__title")[0]?.innerHTML;

        if (cardName !== undefined && cardName !== "Coming Soon") {
            setCardName(cardName);
        }
    };

    return (
        <button
            className="card"
            style={title === "Coming Soon" ? { pointerEvents: "none" }: { pointerEvents: "all" }}
            onClick={updateCardName}
        >
            <div className="card__content">
                <div className="card__logo-container">
                    <div className="card__logo">
                        <IconComp icon={icon as IconProps["icon"]}/>
                    </div>
                </div>

                <div className="card__title-container">
                    <div className="card__title">
                        {title}
                    </div>
                </div>

                <div className="card__tech-stack-container">
                    <div className="card__tech-stack">
                        {techStack.map((tech, index) => (
                            <div key={index}>
                                {tech}

                                {index !== techStack.length - 1 && (
                                    <span>&nbsp;|&nbsp;</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </button>
    );
};


export default Card;