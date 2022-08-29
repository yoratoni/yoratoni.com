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
        <div className="footer__scrollToTopContainer">
            <button className="footer__scrollToTop">
                <ExpandCircleDownIcon
                    onClick={goToTop}
                />
            </button>
        </div>
    );
};


export default ScrollToTop;