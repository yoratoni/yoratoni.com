import React from "react";
import "styles/main.css";

// CSS Libs
import "animate.css/animate.min.css";

// General app styles
import "styles/fonts.css";
import "styles/library.css";
import "styles/vars.css";
import "styles/main.css";

// Libs
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

// App components
import AppParallax from "components/atoms/appParallax/AppParallax";


const App = () => {
    const [parallaxInstruction, setParallaxInstruction] = React.useState<IsParallaxInstructionType>("standby");

    return (
        <main className="app">
            <ReactScrollWheelHandler
                upHandler={(e) => setParallaxInstruction("next")}
                downHandler={(e) => setParallaxInstruction("previous")}
                disableSwipeWithMouse={true}
                timeout={256}
            >
                <div className="app__background">
                    <AppParallax instruction={parallaxInstruction} />
                </div>

                <div className="app__overlay">

                </div>
            </ReactScrollWheelHandler>
        </main>
    );
};


export default App;