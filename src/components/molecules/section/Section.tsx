import React from "react";
import "./Section.css";


const Section = ({
    children = null,
    className = ""
}: IsChildAndClass) => {
    return (
        <section
            className={`section ${className}`}
        >
            {children}
        </section>
    );
};


export default Section;