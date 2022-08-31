import React from "react";
import "./SectionContainer.css";

import { AnimationOnScroll } from "react-animation-on-scroll";


const SectionContainer = (props: PropsSection) => {
    const animationDivStyle = {
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    return (
        <section className={`section-container ${props.style || ""}`} id={props.sectionId}>
            <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOnce={true}
                style={animationDivStyle}
            >
                <div className="section">
                    <div className="section__title">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="section__content">
                        {props.children}
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    );
};


export default SectionContainer;