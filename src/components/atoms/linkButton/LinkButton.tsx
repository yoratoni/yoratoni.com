import React from "react";
import "./LinkButton.css";


const LinkButton = (
    {
        children = null,
        href = "/",
        title = "",
        target = "_blank",
    }: PropsSocialButton
) => {
    return (
        <a
            className="social-button"
            href={href}
            title={title}
            target={target}
            rel="noreferrer"
        >
            {children !== null && children}
        </a>
    );
};


export default LinkButton;