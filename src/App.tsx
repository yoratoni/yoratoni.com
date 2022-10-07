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
    const [parallaxAnimate, setParallaxAnimate] = React.useState<boolean>(false);

    const upHandler = () => {
        setParallaxDirection(1);
        setParallaxAnimate(true);
    };

    const downHandler = () => {
        setParallaxDirection(-1);
        setParallaxAnimate(true);
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
                    <AppParallax direction={parallaxDirection} animate={parallaxAnimate} />
                </div>

                <div className="app__overlay">

                </div>
            </ReactScrollWheelHandler>
        </main>
    );
};


export default App;