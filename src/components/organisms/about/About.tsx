import React from "react";
import "./About.css";

import SectionContainer from "components/molecules/sectionContainer/SectionContainer";


const About = () => {
    return (
        <SectionContainer title="About Me" sectionId="about">
            <picture className="about__picture"></picture>

            <p>Hello! My name is Brittany and I enjoy creating things that live on the internet.
                My interest in web development started back in 2012 when I decided to try
                editing custom Tumblr themes —
            </p>

            <p>
                I also <span>recently</span> launched a course that covers everything you need to zr,glk zerkgb zergrbvk, zg
            </p>
        </SectionContainer>
    );
};


export default About;