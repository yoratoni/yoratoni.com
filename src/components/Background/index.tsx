import { useContext, useEffect, useRef, useState } from "react";
import "@/styles/background.css";

import { PageNumberContext } from "@/components/Contexts/PageNumber";
import config from "@/configs/main.config";
import useAnimationFrame from "@/hooks/useAnimationFrame";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import NsBackground from "@/types/background";


const Background = () => {
    const { pageNumber } = useContext(PageNumberContext);

    const backgroundWidthRef = useRef<HTMLDivElement | null>(null);
    const windowDimensions = useWindowDimensions();

    const parameters = {
        defaultSpeed: 1,                                            // Default speed of the bck
        speedModifier: 8,                                           // Speed modifier of the bck
        contentHeightSpeedModifier: 800,                            // Based on a default height, create a factor to keep the same speed on every screen
        minContentHeightSpeedFactor: 0.2,                           // Minimum factor to keep the same speed on every screen
        maxSpeed: 128,                                              // Max speed of the bck
        xArray: Array(config.numberOfImagesForParallax).fill(0)     // Contains the x position of each layer (=translateX)
    };

    const [backgroundObj, setBackgroundObj] = useState<NsBackground.backgroundObj>({
        width: 0,                                   // The total width of the bck (dynamically calculated)
        oneImageWidth: 0,                           // The width of only one bck image based on the height
        imageRepeated: 0,                           // The number of times that the bck is repeated
        animationState: "BCK_ANIM_STATE::STOP",     // Launch the scrolling animation
        animationCurrX: 0,                          // Contains the current X of the animation
        speed: parameters.defaultSpeed,             // Current speed of the bck (used during the animation)
        xArray: parameters.xArray                   // Contains the x position of each layer (=translateX)
    });

    const [prevPageNumber, setPrevPageNumber] = useState(-1);

    // Returns a direction speed factor of the parallax (-1 or 1),
    const [direction, setDirection] = useState<-1 | 1>(1);

    // An index incrementing at every scroll to launch the animation even
    // when the scrolling is in the same direction
    const [animIndex, setAnimIndex] = useState(-1);

    // Based on the page number from the context, the direction is set
    // to 1 or -1, allowing to know if the scrolling is going up or down
    useEffect(() => {
        if (prevPageNumber !== -1) {
            if (pageNumber > prevPageNumber) {
                setDirection(1);
            } else {
                setDirection(-1);
            }

            setAnimIndex(animIndex => animIndex + 1);
            setPrevPageNumber(pageNumber);
        } else {
            setPrevPageNumber(0);
        }
    }, [pageNumber]);

    // animIndex used as a dependency to launch the animation (launchAnimation = true),
    // launchAnimation is, then, resetting to false at the end of the animation,
    // creating a cooldown where the animation can be launched only if the previous anim
    // is finished (false state reset)
    useEffect(() => {
        if (animIndex !== -1 && backgroundObj.animationState !== "BCK_ANIM_STATE::START") {
            setBackgroundObj(prevState => ({
                ...prevState,
                animationState: "BCK_ANIM_STATE::START"
            }));
        }
    }, [animIndex]);

    useEffect(() => {
        const handleResize = () => {
            const tempOneImageWidth = Math.round(windowDimensions.height * (16 / 9));
            const tempImageRepeated = Math.ceil((windowDimensions.width / tempOneImageWidth) + 1);

            setBackgroundObj(prevState => ({
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
            const tempXArray = backgroundObj.xArray;
            let tempAnimationCurrX = backgroundObj.animationCurrX;
            let tempSpeed = backgroundObj.speed;

            // Factor to modify speed depending on height, keeping the same speed on every screen
            // Limited to x1
            const heightFactorSpeedModifier = Math.min(
                windowDimensions.height / parameters.contentHeightSpeedModifier,
                1
            );

            for (let i = 0; i < tempXArray.length; i++) {
                tempXArray[i] += Math.round((tempSpeed + i) * direction * Math.max(heightFactorSpeedModifier, parameters.minContentHeightSpeedFactor));

                // X coordinate should be between 0 && backgroundObj.oneImageWidth
                if (tempXArray[i] < 0 || tempXArray[i] > backgroundObj.oneImageWidth) {
                    if (direction === 1) {
                        tempXArray[i] = 0;
                    } else {
                        tempXArray[i] = backgroundObj.oneImageWidth;
                    }
                }
            }

            // Do the same thing as tempXArray[0] but do not return to 0
            // Allowing to check if the parallax traveled X pixels without
            // having to use a modulo
            if (backgroundObj.animationState !== "BCK_ANIM_STATE::STOP") {
                tempAnimationCurrX += Math.round(tempSpeed * direction);
            } else {
                tempAnimationCurrX = 0;
            }

            // Controls the 2 phases of the animation
            // START: from default to max speed, then, wait for parallax to travel window width
            // STOP: decelerate from max to default speed
            if (backgroundObj.animationState === "BCK_ANIM_STATE::START") {
                if (tempSpeed < parameters.maxSpeed) {
                    tempSpeed += parameters.speedModifier;
                } else {
                    if (Math.abs(tempAnimationCurrX) > windowDimensions.width) {
                        setBackgroundObj(prevState => ({
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

            setBackgroundObj(prevState => ({
                ...prevState,
                speed: tempSpeed,
                xArray: tempXArray,
                animationCurrX: tempAnimationCurrX
            }));
        }, [
            windowDimensions.width,
            backgroundObj.animationState,
            backgroundObj.animationCurrX,
            backgroundObj.width,
            backgroundObj.speed,
            direction
        ]
    );

    return (
        <div className="w-full relative bg-[#DEFDFD] brightness-50 background overflow-x-hidden outline-none"
            style={{ height: windowDimensions.height - 1 }}
        >
            <div className="background__layer background__layer-1" ref={backgroundWidthRef}
                style={{
                    transform: `translateX(-${backgroundObj.xArray[0]}px)`,
                    width: `${backgroundObj.width}px`
                }}
            />

            <div className="background__layer background__layer-2"
                style={{
                    transform: `translateX(-${backgroundObj.xArray[1]}px)`,
                    width: `${backgroundObj.width}px`
                }}
            />

            <div className="background__layer background__layer-3"
                style={{
                    transform: `translateX(-${backgroundObj.xArray[2]}px)`,
                    width: `${backgroundObj.width}px`
                }}
            />

            <div className="background__layer background__layer-4"
                style={{
                    transform: `translateX(-${backgroundObj.xArray[3]}px)`,
                    width: `${backgroundObj.width}px`
                }}
            />

            <div className="background__layer background__layer-5"
                style={{
                    transform: `translateX(-${backgroundObj.xArray[4]}px)`,
                    width: `${backgroundObj.width}px`
                }}
            />

            {/* <div className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {windowDimensions.height / parameters.contentHeightSpeedModifier}
            </div> */}
        </div>
    );
};


export default Background;