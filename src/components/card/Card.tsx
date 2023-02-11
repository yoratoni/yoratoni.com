import React from "react";
import "./Card.css";


const Card = ({
    title,
    description,
    logo,
    techStack = [],
    sourceCodeLink = null,
    externalLink = null,
    cardColor = "#4D8673",
}: IsCard) => {
    return (
        <div className="card" style={{ backgroundColor: `${cardColor}` }}>
            <div
                className="card__logo"
                style={{ backgroundImage: `url(${logo})` }}
            >
            </div>
            <div className="card__title">
                {title}
            </div>
        </div>
    );
};


export default Card;