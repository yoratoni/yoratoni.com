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
import AppParallax from "components/molecules/appParallax/AppParallax";
import AppOverlay from "components/molecules/appOverlay/AppOverlay";


const App = () => {
    // Returns a direction speed factor of the parallax (-1 or 1),
    const [parallaxDirection, setParallaxDirection] = React.useState<IsDirectionSpeedFactor>(1);

    // An index incrementing at every scroll to launch the animation even
    // when the scrolling is in the same direction
    const [parallaxAnimIndex, setParallaxAnimIndex] = React.useState<number>(-1);

    // The number of the current app page and the max page number (included)
    const [pageNumber, setPageNumber] = React.useState<number>(0);
    const maxPageNumber = 4;

    const upHandler = () => {
        setParallaxDirection(1);
        setParallaxAnimIndex(index => index + 1);

        if (pageNumber < maxPageNumber) {
            setPageNumber(number => number + 1);
        } else {
            setPageNumber(0);
        }
    };

    const downHandler = () => {
        setParallaxDirection(-1);
        setParallaxAnimIndex(index => index + 1);

        if (pageNumber > 0) {
            setPageNumber(number => number - 1);
        } else {
            setPageNumber(maxPageNumber);
        }
    };

    return (
        <main className="app">
            <ReactScrollWheelHandler
                upHandler={() => upHandler()}
                rightHandler={() => downHandler()}
                downHandler={() => downHandler()}
                leftHandler={() => upHandler()}
                disableSwipeWithMouse={true}
                preventScroll={true}
                timeout={256}
            >
                <div className="app__parallax-container">
                    <AppParallax direction={parallaxDirection} animIndex={parallaxAnimIndex} />
                </div>

                <div className="app__overlay-container">
                    <AppOverlay pageNumber={pageNumber}/>
                </div>
            </ReactScrollWheelHandler>
        </main>
    );
};


export default App;