import React from "react";
import "./TextButton.css";


const TextButton = (
    {
        children = null,
        href = "/",
        title = "",
        target = "_blank",
    }: IsPropsButton
) => {
    return (
        <a
            className="text-button"
            href={href}
            title={title}
            target={target}
            rel="noreferrer"
        >
            {children !== null && children}
        </a>
    );
};


export default TextButton;