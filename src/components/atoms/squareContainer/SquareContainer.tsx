import React from "react";
import "./SquareContainer.css";


const SquareContainer = (props: PropsContainer) => {
    return (
        <div className={`squareContainer ${props.style}`}>
            {props.children}
        </div>
    );
};


export default SquareContainer;