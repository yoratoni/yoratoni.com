import React from "react";
import "./SquareContainer.css";


const SquareContainer = (props: PropsChildrenAndStyle) => {
    return (
        <div className={`squareContainer ${props.style}`}>
            {props.children}
        </div>
    );
};


export default SquareContainer;