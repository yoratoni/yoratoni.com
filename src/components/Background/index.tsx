import { useContext, useEffect, useRef, useState } from "react";
import "@/styles/background.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FPSStats from "react-fps-stats";

import { PageNumberContext } from "@/components/Contexts/PageNumber";
import config from "@/configs/main.config";
import useAnimationFrame from "@/hooks/useAnimationFrame";
import NsBackground from "@/types/background";


const Background = () => {
    const { pageNumber } = useContext(PageNumberContext);

    const backgroundWidthRef = useRef<HTMLDivElement | null>(null);

    const [backgroundObj, setBackgroundObj] = useState<NsBackground.backgroundObj>({
        width: 0,                                               // The total width of the bck (dynamically calculated)
        oneImageWidth: 0,                                       // The width of only one bck image based on the height
        imageRepeated: 0,                                       // The number of times that the bck is repeated
        animationState: "BCK_ANIM_STATE::STOP",                 // Launch the scrolling animation
        animationCurrX: 0,                                      // Contains the current X of the animation
        speed: config.parallax.defaultSpeed,                    // Current speed of the bck (used during the animation)
        xArray: Array(config.parallax.numberOfLayers).fill(0)   // Contains the x position of each layer (=translateX)
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
            const tempOneImageWidth = Math.round(window.innerHeight * (16 / 9));
            const tempImageRepeated = Math.ceil((window.innerWidth / tempOneImageWidth) + 1);

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
    }, [backgroundWidthRef]);

    // Main loop
    useAnimationFrame(
        () => {
            const tempXArray = backgroundObj.xArray;
            let tempAnimationCurrX = backgroundObj.animationCurrX;
            let tempSpeed = backgroundObj.speed;

            // Factor to modify speed depending on height, keeping the same speed on every screen
            // Limited to x1
            const heightFactorSpeedModifier = Math.min(
                window.innerHeight / config.parallax.contentHeightWhereSpeedFactorIsOne,
                1
            );

            for (let i = 0; i < tempXArray.length; i++) {
                tempXArray[i] += Math.round((tempSpeed + i) * direction * Math.max(
                    heightFactorSpeedModifier,
                    config.parallax.minContentHeightSpeedFactor
                ));

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
                if (tempSpeed < config.parallax.maxSpeed) {
                    tempSpeed += config.parallax.speedModifier;
                } else {
                    if (Math.abs(tempAnimationCurrX) > window.innerWidth) {
                        setBackgroundObj(prevState => ({
                            ...prevState,
                            animationState: "BCK_ANIM_STATE::STOP"
                        }));
                    }
                }
            } else {
                if (tempSpeed > config.parallax.defaultSpeed) {
                    tempSpeed -= config.parallax.speedModifier;
                } else {
                    tempSpeed = config.parallax.defaultSpeed;
                }
            }

            setBackgroundObj(prevState => ({
                ...prevState,
                speed: tempSpeed,
                xArray: tempXArray,
                animationCurrX: tempAnimationCurrX
            }));
        }, [
            backgroundObj.animationState,
            backgroundObj.animationCurrX,
            backgroundObj.width,
            backgroundObj.speed,
            direction
        ]
    );

    return (
        <>
            {config.developerMode && (
                <div className="absolute z-50 flex-col items-end justify-center w-full pt-2 pl-3 text-sm text-left">
                    <FPSStats left="auto" right="0" />
                    <p className="text-base underline underline-offset-2">DEV MODE:</p>
                    <p>&gt; BG WIDTH: {backgroundObj.width}</p>
                    <p>&gt; BG SPEED MOD: {backgroundObj.speed}</p>

                    {backgroundObj.xArray.map((x, index) => (
                        <p key={index}>&gt; LAYER {index + 1}: {x}</p>
                    ))}
                </div>
            )}

            <div className="w-full relative bg-[#DEFDFD] brightness-50 background overflow-hidden outline-none blur-md"
                style={{ height: window.innerHeight - 1 }}
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
            </div>
        </>
    );
};


export default Background;