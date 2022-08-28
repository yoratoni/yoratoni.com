import React from "react";
import "./Social.css";

import Link from "../link/Link";


/**
 * Wrapper of the Link component.
 *
 * Note that otherStyle is passed to the Link and also to its wrapper div.
 * @param otherStyle A string containing other classes to apply custom style.
 * @param href Default href for the link.
 * @param title Title of the <a> tag -> hovering msg.
 */
const Social = (
    {
        otherStyle = "",
        children = null,
        href = "/",
        title = ""
    }: PropsLink
) => {
    return (
        <Link
            // Inherit otherStyle from wrapper component
            otherStyle={otherStyle}
            href={href}
            title={title}
            target="_blank"
        >
            <div className={`social ${otherStyle}`}>
                {children}
            </div>
        </Link>
    );
};


export default Social;