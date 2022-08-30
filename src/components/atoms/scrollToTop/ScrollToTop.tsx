import React from "react";
import "./ScrollToTop.css";

import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";


const ScrollToTop = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button className="scrollToTop" onClick={goToTop} title="Scroll to top">
            <ExpandCircleDownIcon />
        </button>
    );
};


export default ScrollToTop;