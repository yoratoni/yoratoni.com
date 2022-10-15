import React from "react";
import "./Background.css";

import {
    useWindowDimensions,
    useAnimationFrame
} from "scripts/utilities";


import { pageNumberContext } from "scripts/contexts";

/*
    ISSUES & NOTES:
    - Solving the zoom problem (miscalculation of the background size)
*/


const Background = ({
    direction,
    animIndex
}: IsBackground) => {
    const {pageNumber} = React.useContext(pageNumberContext);
    const backgroundWidthRef = React.useRef<HTMLDivElement | null>(null);
    const windowDimensions = useWindowDimensions();

    const parameters = {
        defaultSpeed: 1,
        speedModifier: 4,
        speedPerLayer: 0.5,
        maxSpeed: 64,
        originalImageWidth: 1920,
        xArray: [0, 0, 0, 0]
    };

    const [backgroundDict, setBackgroundDict] = React.useState<IsBackgroundDict>({
        width: 0,                       // The total width of the bck (dynamically calculated)
        oneImageWidth: 0,               // The width of only one bck image based on the height
        imageRepeated: 0,               // The number of times that the bck is repeated
        launchAnimation: false,         // If true, launch the scrolling animation (resets to false)
        speed: parameters.defaultSpeed, // Current speed of the bck (used during the animation)
        xArray: parameters.xArray       // Contains the x position of each layer (=translateX)
    });


    // animIndex used as a dependency to launch the animation (launchAnimation = true),
    // launchAnimation is, then, resetting to false at the end of the animation,
    // creating a cooldown where the animation can be launched only if the previous anim
    // is finished (false state reset)
    React.useEffect(() => {
        if (animIndex !== -1 && !backgroundDict.launchAnimation) {
            setBackgroundDict(prevState => ({
                ...prevState,
                launchAnimation: true
            }));
        }
    }, [animIndex]);


    React.useEffect(() => {
        const handleResize = () => {
            const tempOneImageWidth = Math.round(windowDimensions.height * (16/9));
            const tempImageRepeated = Math.ceil((windowDimensions.width / tempOneImageWidth) + 1);

            setBackgroundDict(prevState => ({
                ...prevState,
                width: tempImageRepeated * tempOneImageWidth,
                oneImageWidth: tempOneImageWidth,
                imageRepeated: tempImageRepeated
            }));
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [windowDimensions, backgroundWidthRef]);


    // Main loop
    useAnimationFrame(
        () => {
            const constantSpeedFactor = backgroundDict.oneImageWidth / parameters.originalImageWidth;
            const tempXArray = backgroundDict.xArray;
            let tempSpeed = backgroundDict.speed;

            if (backgroundDict.launchAnimation) {
                if (tempSpeed < parameters.maxSpeed) {
                    tempSpeed += parameters.speedModifier;
                } else {
                    tempSpeed = parameters.maxSpeed;

                    setBackgroundDict(prevState => ({
                        ...prevState,
                        launchAnimation: false
                    }));
                }
            } else {
                if (tempSpeed > parameters.defaultSpeed) {
                    tempSpeed -= parameters.speedModifier;
                } else {
                    tempSpeed = parameters.defaultSpeed;
                }
            }

            for (let i = 0; i < tempXArray.length; i++) {
                tempXArray[i] += Math.round((tempSpeed + i) * constantSpeedFactor * direction);

                // X coordinate should be between 0 && backgroundDict.oneImageWidth
                if (tempXArray[i] < 0 || tempXArray[i] > backgroundDict.oneImageWidth) {
                    if (direction === 1) {
                        tempXArray[i] = 0;
                    } else {
                        tempXArray[i] = backgroundDict.oneImageWidth;
                    }
                }
            }

            setBackgroundDict(prevState => ({
                ...prevState,
                speed: tempSpeed,
                xArray: tempXArray
            }));
        },
        [
            backgroundDict.launchAnimation,
            backgroundDict.width,
            backgroundDict.speed,
            direction
        ]
    );


    return (
        <div className="background"
            style={{height: windowDimensions.height - 1}}
        >
            <div className="background__layer background__layer-1" ref={backgroundWidthRef}
                style={{
                    transform: `translateX(-${backgroundDict.xArray[0]}px)`,
                    width: `${backgroundDict.width}px`
                }}
            ></div>

            <div className="background__layer background__layer-2"
                style={{
                    transform: `translateX(-${backgroundDict.xArray[1]}px)`,
                    width: `${backgroundDict.width}px`
                }}
            ></div>

            <div className="background__layer background__layer-3"
                style={{
                    transform: `translateX(-${backgroundDict.xArray[2]}px)`,
                    width: `${backgroundDict.width}px`
                }}
            ></div>

            <div className="background__layer background__layer-4"
                style={{
                    transform: `translateX(-${backgroundDict.xArray[3]}px)`,
                    width: `${backgroundDict.width}px`
                }}
            ></div>

            <div className="absolute p-4 font-bold text-black bg-white top-6 left-6">
                Layer 1: {backgroundDict.xArray[0]} <br></br>
                Layer 2: {backgroundDict.xArray[1]} <br></br>
                Layer 3: {backgroundDict.xArray[2]} <br></br>
                Layer 4: {backgroundDict.xArray[3]} <br></br>
                Anim Index: {animIndex} <br></br>
                Page Number: {pageNumber} <br></br>
                Background Speed: {backgroundDict.speed} <br></br>
                Background Repeat: {backgroundDict.imageRepeated}x <br></br>
                Background Width: {backgroundDict.width}px <br></br>
                One layer width: {backgroundDict.oneImageWidth}px <br></br>
                Window: {windowDimensions.width}px / {windowDimensions.height}px
            </div>
        </div>
    );
};


export default Background;