import React from "react";
import "./Section.css";


const Section = ({
    children = null,
    className = ""
}: IsWithChildAndClass) => {
    return (
        <section
            className={`section ${className}`}
        >
            {children}
        </section>
    );
};


export default Section;