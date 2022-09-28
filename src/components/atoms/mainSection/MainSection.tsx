import React from "react";
import "./MainSection.css";

import Separator from "components/atoms/separator/Separator";


const MainSection = ({
    heading = null,
    subheading = null,
    children = null
}: IsMainSection) => {
    return (
        <section className="main-section">
            <Separator heading={heading} subheading={subheading} />
            <div className="main-section__content">
                {children}
            </div>
        </section>
    );
};


export default MainSection;