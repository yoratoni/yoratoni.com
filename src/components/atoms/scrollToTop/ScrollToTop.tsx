import React from "react";
import "./ScrollToTop.css";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";


const ScrollToTop = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // React.useEffect(() => {
    //     goToTop();
    // }, []);

    return (
        <button
            className="scroll-to-top"
            onClick={goToTop}
            title="Scroll to top"
        >
            <KeyboardDoubleArrowUpIcon />
        </button>
    );
};


export default ScrollToTop;