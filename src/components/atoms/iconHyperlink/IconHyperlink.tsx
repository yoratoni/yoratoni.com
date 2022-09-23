import React from "react";
import "./IconHyperlink.css";


const IconHyperlink = ({
    children = null,
    title = "Click here",
    href = "./",
    hrefLang = "en",
    target = "_blank"
}: IsIconHyperlink) => {
    return (
        <a
            className="icon-hyperlink"
            href={href}
            hrefLang={hrefLang}
            target={target}
            rel="noreferrer noopener"
            title={title}
        >
            {children}
        </a>
    );
};


export default IconHyperlink;