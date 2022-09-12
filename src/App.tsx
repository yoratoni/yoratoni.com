import React from "react";
import "styles/main.css";

// CSS Libs
import "animate.css/animate.min.css";

// General app styles
import "styles/fonts.css";
import "styles/vars.css";
import "styles/main.css";

// App layers
import Background from "layers/background/Background";
import Canvas from "layers/canvas/Canvas";
import Content from "layers/content/Content";


const App = () => {
    return (
        <>
            <Background />
            <Canvas />
            <Content />
        </>
    );
};


export default App;