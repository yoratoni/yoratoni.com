import React from "react";
import "./ScrollToTop.css";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";


const ScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="scroll-to-top">
            <button className="scroll-to-top__button" title="Scroll to top" onClick={scrollToTop}>
                <KeyboardDoubleArrowUpIcon />
            </button>
        </div>
    );
};


export default ScrollToTop;