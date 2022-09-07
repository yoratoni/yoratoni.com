import React from "react";
import "./SquareContainer.css";


const SquareContainer = (props: IsPropsContainer) => {
    return (
        <div className={`square-container ${props.style || ""}`}>
            {props.children}
        </div>
    );
};


export default SquareContainer;