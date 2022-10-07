import React from "react";
import "./AppParallax.css";

import { useWindowDimensions, useAnimationFrame } from "scripts/utilities";


/*
    ISSUES & NOTES:
    - Solving the zoom problem (miscalculation of the parallax size)
    - 100vh problem on mobile, check multiple solving methods
*/


const AppParallax = ({
    animation
}: IsParallaxInstruction) => {
    const parallaxWidthRef = React.useRef<HTMLDivElement | null>(null);

    const parameters = {
        maxSpeed: 32,
        defaultSpeed: 10,
        xArray: [0, 0, 0, 0]
    };

    const windowDimensions = useWindowDimensions();

    const [parallaxDict, setParallaxDict] = React.useState<IsParallaxDict>({
        directionSpeedFactor: 1,        // 1 if the parallax is in "next" mode
        parallaxWidth: 0,               // The total width of the parallax (dynamically calculated)
        parallaxOneWidth: 0,            // The width of only one layer based on the height
        parallaxRepeat: 0,              // The number of times that the parallax is repeated
        xArray: parameters.xArray,      // Contains the x position of each layer (=translateX)
        localAnimation: "standby"       // Local instruction with reset to standby when done
    });


    React.useEffect(() => {
        const handleResize = () => {
            const tempParallaxOneWidth = Math.round(windowDimensions.height * (16/9));
            const tempParallaxRepeat = Math.ceil((windowDimensions.width / tempParallaxOneWidth) + 1);

            setParallaxDict(prevState => ({
                ...prevState,
                parallaxWidth: tempParallaxRepeat * tempParallaxOneWidth,
                parallaxOneWidth: tempParallaxOneWidth,
                parallaxRepeat: tempParallaxRepeat
            }));
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [windowDimensions, parallaxWidthRef]);


    // Change local animation based on the animation var
    // Allowing a reset of the internal value at the end of the animation
    // Also changes the default styling of the parallax
    React.useEffect(() => {
        if (animation !== "standby") {
            let tempDirectionSpeedFactor: IsDirectionSpeedFactor = 1;

            if (animation === "previous") {
                tempDirectionSpeedFactor = -1;
            }

            setParallaxDict(prevState => ({
                ...prevState,
                directionSpeedFactor: tempDirectionSpeedFactor,
                localAnimation: animation
            }));
        }
    }, [animation]);


    // Main loop
    useAnimationFrame(
        () => {
            const tempXArray = parallaxDict.xArray;

            if (parallaxDict.parallaxWidth) {

                for (let i = 0; i < tempXArray.length; i++) {
                    tempXArray[i] -= (parameters.defaultSpeed) * parallaxDict.directionSpeedFactor;

                    // X coordinate should be between -parallaxDict.parallaxOneWidth && 0
                    if (-tempXArray[i] > parallaxDict.parallaxOneWidth || tempXArray[i] > 0) {
                        if (parallaxDict.directionSpeedFactor === 1) {
                            tempXArray[i] = 0;
                        } else {
                            tempXArray[i] = -parallaxDict.parallaxOneWidth;
                        }
                    }
                }
            }

            setParallaxDict(prevState => ({
                ...prevState,
                xArray: tempXArray
            }));
        },
        [
            parallaxDict.directionSpeedFactor,
            parallaxDict.parallaxWidth
        ]
    );


    return (
        <div className="app-parallax">
            <div className="app-parallax__layer app-parallax__layer-1" ref={parallaxWidthRef}
                style={{
                    transform: `translateX(${parallaxDict.xArray[3]}px)`,
                    width: `${parallaxDict.parallaxWidth}px`
                }}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-2"
                style={{
                    transform: `translateX(${parallaxDict.xArray[3]}px)`,
                    width: `${parallaxDict.parallaxWidth}px`
                }}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-3"
                style={{
                    transform: `translateX(${parallaxDict.xArray[3]}px)`,
                    width: `${parallaxDict.parallaxWidth}px`
                }}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-4"
                style={{
                    transform: `translateX(${parallaxDict.xArray[3]}px)`,
                    width: `${parallaxDict.parallaxWidth}px`
                }}
            ></div>

            <div className="absolute p-4 font-bold text-black bg-white top-6 left-6">
                Layer 1: {parallaxDict.xArray[0]} <br></br>
                Layer 2: {parallaxDict.xArray[1]} <br></br>
                Layer 3: {parallaxDict.xArray[2]} <br></br>
                Layer 4: {parallaxDict.xArray[3]} <br></br>
                Window: {windowDimensions.width}px / {windowDimensions.height}px <br></br>
                Parallax Repeat: {parallaxDict.parallaxRepeat}x <br></br>
                One layer width: {parallaxDict.parallaxOneWidth}px <br></br>
                Parallax Width: {parallaxDict.parallaxWidth}px
            </div>
        </div>
    );
};


export default AppParallax;