import React from "react";
import "styles/main.css";

// CSS Libs
import "animate.css/animate.min.css";

// General app styles
import "styles/vars.css";
import "styles/main.css";

// App layers
import Background from "layers/background/Background";
import Content from "layers/Content";


const App = () => {
    return (
        <>
            <Background />
            <Content />
        </>
    );
};


export default App;