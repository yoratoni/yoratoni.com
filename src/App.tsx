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
    // Returns a direction speed factor of the parallax (-1 or 1),
    const [parallaxDirection, setParallaxDirection] = React.useState<IsDirectionSpeedFactor>(1);

    // An index incrementing at every scroll to handle scrolling animation
    // even when the scrolling is in the same direction multiple times,
    // -1 is disabled (website loading).
    const [parallaxAnimIndex, setParallaxAnimIndex] = React.useState<number>(-1);

    const upHandler = () => {
        setParallaxDirection(1);
        setParallaxAnimIndex(index => index + 1);
    };

    const downHandler = () => {
        setParallaxDirection(-1);
        setParallaxAnimIndex(index => index + 1);
    };

    return (
        <main className="app">
            <ReactScrollWheelHandler
                upHandler={() => upHandler()}
                downHandler={() => downHandler()}
                disableSwipeWithMouse={true}
                timeout={256}
            >
                <div className="app__background">
                    <AppParallax direction={parallaxDirection} animIndex={parallaxAnimIndex} />
                </div>

                <div className="app__overlay">

                </div>
            </ReactScrollWheelHandler>
        </main>
    );
};


export default App;