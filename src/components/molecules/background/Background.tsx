import React from "react";
import "./Background.css";

import {
    useWindowDimensions,
    useAnimationFrame
} from "scripts/utilities";


/*
    ISSUES & NOTES:
    - Solving the zoom problem (miscalculation of the background size)
*/


const Background = ({
    direction,
    animIndex
}: IsBackground) => {
    const backgroundWidthRef = React.useRef<HTMLDivElement | null>(null);
    const windowDimensions = useWindowDimensions();

    const parameters = {
        defaultSpeed: 1,
        speedModifier: 8,
        maxSpeed: 128,
        xArray: [0, 0, 0, 0]
    };

    const [backgroundDict, setBackgroundDict] = React.useState<IsBackgroundDict>({
        width: 0,                               // The total width of the bck (dynamically calculated)
        oneImageWidth: 0,                       // The width of only one bck image based on the height
        imageRepeated: 0,                       // The number of times that the bck is repeated
        animationState: "BCK_ANIM_STATE::STOP", // Launch the scrolling animation
        animationCurrX: 0,                      // Contains the current X of the animation
        speed: parameters.defaultSpeed,         // Current speed of the bck (used during the animation)
        xArray: parameters.xArray               // Contains the x position of each layer (=translateX)
    });


    // animIndex used as a dependency to launch the animation (launchAnimation = true),
    // launchAnimation is, then, resetting to false at the end of the animation,
    // creating a cooldown where the animation can be launched only if the previous anim
    // is finished (false state reset)
    React.useEffect(() => {
        if (animIndex !== -1 && backgroundDict.animationState !== "BCK_ANIM_STATE::START") {
            setBackgroundDict(prevState => ({
                ...prevState,
                animationState: "BCK_ANIM_STATE::START"
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
            const tempXArray = backgroundDict.xArray;
            let tempAnimationCurrX = backgroundDict.animationCurrX;
            let tempSpeed = backgroundDict.speed;

            for (let i = 0; i < tempXArray.length; i++) {
                tempXArray[i] += Math.round((tempSpeed + i) * direction);

                // X coordinate should be between 0 && backgroundDict.oneImageWidth
                if (tempXArray[i] < 0 || tempXArray[i] > backgroundDict.oneImageWidth) {
                    if (direction === 1) {
                        tempXArray[i] = 0;
                    } else {
                        tempXArray[i] = backgroundDict.oneImageWidth;
                    }
                }
            }

            // Do the same thing as tempXArray[0] but do not return to 0
            // Allowing to check if the parallax traveled X pixels without
            // having to use a modulo
            if (backgroundDict.animationState !== "BCK_ANIM_STATE::STOP") {
                tempAnimationCurrX += Math.round(tempSpeed * direction);
            } else {
                tempAnimationCurrX = 0;
            }

            // Controls the 2 phases of the animation
            // START: from default to max speed, then, wait for parallax to travel window width
            // STOP: decelerate from max to default speed
            if (backgroundDict.animationState === "BCK_ANIM_STATE::START") {
                if (tempSpeed < parameters.maxSpeed) {
                    tempSpeed += parameters.speedModifier;
                } else {
                    if (Math.abs(tempAnimationCurrX) > windowDimensions.width) {
                        setBackgroundDict(prevState => ({
                            ...prevState,
                            animationState: "BCK_ANIM_STATE::STOP"
                        }));
                    }
                }
            } else {
                if (tempSpeed > parameters.defaultSpeed) {
                    tempSpeed -= parameters.speedModifier;
                } else {
                    tempSpeed = parameters.defaultSpeed;
                }
            }

            setBackgroundDict(prevState => ({
                ...prevState,
                speed: tempSpeed,
                xArray: tempXArray,
                animationCurrX: tempAnimationCurrX
            }));
        }, [
            backgroundDict.animationState,
            backgroundDict.animationCurrX,
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

            {/* <div className="absolute p-4 font-bold text-black bg-white top-6 left-6">
                Layer 0: {backgroundDict.xArray[0]} <br></br>
                Layer 1: {backgroundDict.xArray[1]} <br></br>
                Layer 2: {backgroundDict.xArray[2]} <br></br>
                Layer 3: {backgroundDict.xArray[3]} <br></br>
                Bck Speed: {backgroundDict.speed} <br></br>
                Bck Anim X: {backgroundDict.animationCurrX} <br></br>
                Bck Anim State: {backgroundDict.animationState} <br></br>
                Bck Repeat: {backgroundDict.imageRepeated}x <br></br>
                Bck Width: {backgroundDict.width}px <br></br>
                One image width: {backgroundDict.oneImageWidth}px <br></br>
                Window: {windowDimensions.width}px / {windowDimensions.height}px
            </div> */}
        </div>
    );
};


export default Background;