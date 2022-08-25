import React from "react";
import "./SectionTitle.css";


const SectionTitle = (props: IReactSection) => {
    return (
        <div className="sectionTitle">
            <h2>{ props.title }</h2>
        </div>
    );
};


export default SectionTitle;