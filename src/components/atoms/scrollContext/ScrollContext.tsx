import React from "react";


const ScrollContext = React.createContext<IsScrollContext>(
    { scroll: 1, applyScroll: null }
);


export default ScrollContext;