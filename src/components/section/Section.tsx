import React from "react";
import "./Section.css";


const Section = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full px-8 my-[8rem]">
            <div className="rcc__squareBck work__sectionTitle">
                <h1>Work</h1>
            </div>

            <div className="w-full max-w-xl rcc__section rcc__squareBck work__section">
            </div>
        </div>
    );
};


export default Section;