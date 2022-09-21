import React from "react";
import "./Hyperlink.css";


const Hyperlink = ({
    name = "Hyperlink",
    title = "Click here",
    href = "./",
    hrefLang = "en",
    target = "_blank"
}: IsHyperlink) => {
    return (
        <a
            className="hyperlink"
            href={href}
            hrefLang={hrefLang}
            target={target}
            rel="noreferrer noopener"
            title={title}
        >
            {name}
        </a>
    );
};


export default Hyperlink;