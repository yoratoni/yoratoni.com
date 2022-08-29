import React from "react";
import "./Social.css";

import Link from "../link/Link";


/**
 * Wrapper of the Link component.
 *
 * Note that linkStyle is only passed to the Link.
 * Allowing to pass CSS to the parent link element
 *
 * @param linkStyle A string containing other classes for link to apply custom style.
 * @param href Default href for the link.
 * @param title Title of the <a> tag -> hovering msg.
 */
const Social = (
    {
        linkStyle = "custom-link",
        children = null,
        href = "/",
        title = ""
    }: PropsLink
) => {
    return (
        <Link
            // Inherit otherStyle from wrapper component
            otherStyle={linkStyle}
            href={href}
            title={title}
            target="_blank"
        >
            <div className="social">
                {children}
            </div>
        </Link>
    );
};


export default Social;