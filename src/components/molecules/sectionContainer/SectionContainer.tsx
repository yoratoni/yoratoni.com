import React from "react";
import "./SectionContainer.css";

import { AnimationOnScroll } from "react-animation-on-scroll";
import SquareContainer from "components/atoms/squareContainer/SquareContainer";


const SectionContainer = (props: PropsSection) => {
    return (
        <section className={`section-container ${props.style || ""}`} id={props.sectionId}>
            <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOnce={true}
            >
                <SquareContainer style="w-[inherit] h-auto my-16">
                    <div className="section">
                        <div className="section__title">
                            <h2>{props.title}</h2>
                        </div>

                        <div className="section__content">
                            {props.children}
                        </div>
                    </div>
                </SquareContainer>
            </AnimationOnScroll>
        </section>
    );
};


export default SectionContainer;