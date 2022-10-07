import React from "react";
import "./AppParallax.css";

import { useWindowDimensions, useAnimationFrame } from "scripts/utilities";


/*
    ISSUES & NOTES:
    - Solving the zoom problem (miscalculation of the parallax size)
    - 100vh problem on mobile, check multiple solving methods
    - Adding acceleration & deceleration system
*/


const AppParallax = ({
    direction,
    animate
}: IsParallax) => {
    const parallaxWidthRef = React.useRef<HTMLDivElement | null>(null);

    const parameters = {
        defaultSpeed: 10,
        speedModifier: 1,
        maxSpeed: 32,
        xArray: [0, 0, 0, 0]
    };

    const windowDimensions = useWindowDimensions();

    const [parallaxDict, setParallaxDict] = React.useState<IsParallaxDict>({
        width: 0,                       // The total width of the parallax (dynamically calculated)
        oneImageWidth: 0,               // The width of only one layer based on the height
        imageRepeated: 0,               // The number of times that the parallax is repeated
        localAnimate: false,            // If true, launch the scrolling animation (resets to false)
        xArray: parameters.xArray       // Contains the x position of each layer (=translateX)
    });


    React.useEffect(() => {
        
    }, [animate]);


    React.useEffect(() => {
        const handleResize = () => {
            const tempOneImageWidth = Math.round(windowDimensions.height * (16/9));
            const tempImageRepeated = Math.ceil((windowDimensions.width / tempOneImageWidth) + 1);

            setParallaxDict(prevState => ({
                ...prevState,
                width: tempImageRepeated * tempOneImageWidth,
                oneImageWidth: tempOneImageWidth,
                imageRepeated: tempImageRepeated
            }));
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [windowDimensions, parallaxWidthRef]);


    // Main loop
    useAnimationFrame(
        () => {
            const tempXArray = parallaxDict.xArray;

            if (parallaxDict.width) {
                for (let i = 0; i < tempXArray.length; i++) {
                    tempXArray[i] += (parameters.defaultSpeed) * direction;

                    // X coordinate should be between 0 && parallaxDict.parallaxOneWidth
                    if (tempXArray[i] < 0 || tempXArray[i] > parallaxDict.oneImageWidth) {
                        if (direction === 1) {
                            tempXArray[i] = 0;
                        } else {
                            tempXArray[i] = parallaxDict.oneImageWidth;
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
            parallaxDict.width,
            direction
        ]
    );


    return (
        <div className="app-parallax">
            <div className="app-parallax__layer app-parallax__layer-1" ref={parallaxWidthRef}
                style={{
                    transform: `translateX(-${parallaxDict.xArray[3]}px)`,
                    width: `${parallaxDict.width}px`
                }}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-2"
                style={{
                    transform: `translateX(-${parallaxDict.xArray[3]}px)`,
                    width: `${parallaxDict.width}px`
                }}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-3"
                style={{
                    transform: `translateX(-${parallaxDict.xArray[3]}px)`,
                    width: `${parallaxDict.width}px`
                }}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-4"
                style={{
                    transform: `translateX(-${parallaxDict.xArray[3]}px)`,
                    width: `${parallaxDict.width}px`
                }}
            ></div>

            <div className="absolute p-4 font-bold text-black bg-white top-6 left-6">
                Layer 1: {parallaxDict.xArray[0]} <br></br>
                Layer 2: {parallaxDict.xArray[1]} <br></br>
                Layer 3: {parallaxDict.xArray[2]} <br></br>
                Layer 4: {parallaxDict.xArray[3]} <br></br>
                Parallax Repeat: {parallaxDict.imageRepeated}x <br></br>
                Parallax Width: {parallaxDict.width}px <br></br>
                One layer width: {parallaxDict.oneImageWidth}px <br></br>
                Window: {windowDimensions.width}px / {windowDimensions.height}px
            </div>
        </div>
    );
};


export default AppParallax;