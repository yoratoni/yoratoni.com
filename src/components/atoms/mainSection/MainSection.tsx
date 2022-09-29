import React from "react";
import "./MainSection.css";

import { AnimationOnScroll } from "react-animation-on-scroll";
import Separator from "components/atoms/separator/Separator";


const MainSection = ({
    heading = null,
    subheading = null,
    children = null
}: IsMainSection) => {
    return (
        <AnimationOnScroll animateIn="animate__fadeIn" duration={1.4} animateOnce={true}>
            <section className="main-section">
                <Separator heading={heading} subheading={subheading} />
                <div className="main-section__content">
                    {children}
                </div>
            </section>
        </AnimationOnScroll>
    );
};


export default MainSection;