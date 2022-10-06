import React from "react";
import "./AppParallax.css";

import { useAnimationFrame } from "scripts/utilities";


const AppParallax = ({
    animation
}: IsParallaxInstruction) => {
    const directionStylePrev: IsParallaxDirectionStyle = {
        left: "auto",
        right: "0",
        backgroundPosition: "right"
    };

    const directionStyleNext: IsParallaxDirectionStyle = {
        left: "0",
        right: "auto",
        backgroundPosition: "left"
    };

    const parallaxWidthRef = React.useRef<HTMLDivElement | null>(null);

    const parameters = {
        maxSpeed: 32,
        defaultSpeed: 1,
        xArray: [0, 0, 0, 0]
    };

    const [parallaxDict, setParallaxDict] = React.useState<IsParallaxDict>({
        directionSpeedFactor: 1,            // Can be -1 or 1, multiplying the speed for direction
        directionStyle: directionStyleNext, // Current direction CSS styling applied to layer divs
        parallaxWidth: 0,                   // The total width of the parallax (window width x4)
        xArray: parameters.xArray,          // Contains the x position of each layer (=translateX)
        localAnimation: "standby"           // Local instruction with reset to standby when done
    });


    React.useEffect(() => {
        const handleResize = () => {
            const parallaxWidthBoundingRect = parallaxWidthRef.current?.getBoundingClientRect();

            setParallaxDict(prevState => ({
                ...prevState,
                parallaxWidth: parallaxWidthBoundingRect?.width
            }));
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [parallaxWidthRef]);


    // Change local animation based on the animation var
    // Allowing a reset of the internal value at the end of the animation
    // Also changes the default styling of the parallax
    React.useEffect(() => {
        if (animation !== "standby") {
            let tempDirectionStyle = directionStyleNext;
            let tempDirectionSpeedFactor: IsDirectionSpeedFactor = 1;

            if (animation === "previous") {
                tempDirectionStyle = directionStylePrev;
                tempDirectionSpeedFactor = -1;
            }

            setParallaxDict(prevState => ({
                ...prevState,
                directionSpeedFactor: tempDirectionSpeedFactor,
                directionStyle: tempDirectionStyle,
                localAnimation: animation,
                xArray: parameters.xArray
            }));
        }
    }, [animation]);


    // Main loop
    useAnimationFrame(
        [
            parallaxDict.directionSpeedFactor,
            parallaxDict.directionStyle,
            parallaxDict.parallaxWidth
        ],
        () => {

            if (parallaxDict.parallaxWidth) {
                const layerQuarter = parallaxDict.parallaxWidth / 4;
                const tempSpeed = parameters.defaultSpeed * parallaxDict.directionSpeedFactor;

                for (let i = 0; i < parallaxDict.xArray.length; i++) {
                    parallaxDict.xArray[i] -= tempSpeed + i * parallaxDict.directionSpeedFactor;

                    if (Math.abs(parallaxDict.xArray[i]) > layerQuarter) {
                        parallaxDict.xArray[i] = 0;
                    }
                }
            }

            setParallaxDict(prevState => ({
                ...prevState
            }));
        }
    );


    return (
        <div className="app-parallax">
            <div className="app-parallax__layer app-parallax__layer-1" ref={parallaxWidthRef}
                style={{transform: `translateX(${parallaxDict.xArray[0]}px)`, ...parallaxDict.directionStyle}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-2"
                style={{transform: `translateX(${parallaxDict.xArray[1]}px)`, ...parallaxDict.directionStyle}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-3"
                style={{transform: `translateX(${parallaxDict.xArray[2]}px)`, ...parallaxDict.directionStyle}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-4"
                style={{transform: `translateX(${parallaxDict.xArray[3]}px)`, ...parallaxDict.directionStyle}}
            ></div>

            <div className="absolute font-bold text-black top-6 left-6">
                {parallaxDict.xArray[0]} <br></br>
                {parallaxDict.xArray[1]} <br></br>
                {parallaxDict.xArray[2]} <br></br>
                {parallaxDict.xArray[3]} <br></br>
                {parallaxDict.parallaxWidth}
            </div>
        </div>
    );
};


export default AppParallax;

// if (animationPhase === "accelerate") {
//     if (speed < parameters.maxSpeed) {
//         speed += parameters.speedModifier;
//     } else {
//         animationPhase = "decelerate";
//         speed = parameters.maxSpeed;
//     }
// }

// if (animationPhase === "decelerate") {
//     if (speed > parameters.defaultSpeed) {
//         speed -= parameters.speedModifier;
//     } else {
//         animationPhase = "accelerate";
//         speed = parameters.defaultSpeed;
//     }
// }

// const tempXArray = parameters.xArray.map(
//     layerX => Math.round(layerX + speed)
// );

// console.log(tempXArray);

// setParallaxDict(prevState => ({...prevState, xArray: tempXArray}));

// if (speed === parameters.defaultSpeed) {
//     clearInterval(animInterval.current);
// }

// // Main loop
// React.useEffect(() => {
//     animIntervalRef.current = setInterval(() => {
//         if (parallaxDict.parallaxWidth) {
//             const layerQuarter = parallaxDict.parallaxWidth / 4;

//             for (let i = 0; i < parallaxDict.xArray.length; i++) {
//                 parallaxDict.xArray[i] -= parameters.defaultSpeed;

//                 if (Math.abs(parallaxDict.xArray[i]) > layerQuarter) {
//                     parallaxDict.xArray[i] = 0;
//                 }
//             }
//         }

//         setParallaxDict(prevState => ({
//             ...prevState,
//             localAnimation: animation
//         }));
//     }, parameters.intervalValue);

//     return () => clearInterval(animIntervalRef.current);
// }, [
//     parallaxDict.parallaxWidth,
//     parallaxDict.xArray
// ]);