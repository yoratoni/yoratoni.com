import React from "react";
import "./Link.css";


/**
 * The base component of a link, applying default styling
 */
const Link = (
    {
        otherStyle = "",
        children = null,
        href = "/",
        title = "",
        target = "_self",
        name = null
    }: PropsLink
) => {
    return (
        <a
            className={`link ${otherStyle}`}
            href={href}
            title={title}
            target={target}
            rel="noreferrer"
        >
            {name !== null && name}
            {children !== null && children}
        </a>
    );
};


export default Link;