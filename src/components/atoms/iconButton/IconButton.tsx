import React from "react";
import "./IconButton.css";


const IconButton = (props: IsIconButton) => {
    return (
        <button
            title={props.title}
            onClick={props.onClick}
            className="icon-button"
        >
            {props.children}
        </button>
    );
};


export default IconButton;