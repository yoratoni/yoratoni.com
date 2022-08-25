import React from "react";
import "./Section.css";


const Section = (props: IReactSection) => {
    return (
        <div className="section__container">
            <div className="rcc__squareBck section__title">
                <h1>{props.title}</h1>
            </div>

            <div className="rcc__section rcc__squareBck section__contentContainer">
                <div>{props.children}</div>
            </div>
        </div>
    );
};


export default Section;