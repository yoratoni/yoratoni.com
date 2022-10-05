import React from "react";
import "./AppParallax.css";

import { useAnimationFrame } from "scripts/utilities";


const AppParallax = ({
    animation
}: IsParallaxInstruction) => {
    const parallaxWidthRef = React.useRef<HTMLDivElement | null>(null);

    const parameters = {
        maxSpeed: 32,
        defaultSpeed: 20,
        xArray: [0, 0, 0, 0, 0]
    };

    const [parallaxDict, setParallaxDict] = React.useState<IsParallaxDict>({
        parallaxWidth: 0,             // The total width of the parallax (window width x4)
        xArray: parameters.xArray,    // Contains the x position of each layer (=translateX)
        localAnimation: "standby"     // Local instruction with reset to standby when done
    });


    // Get parallax layer width
    // where all the layers have the same size
    React.useEffect(() => {
        if (parallaxWidthRef.current) {
            const parallaxWidthBoundingRect = parallaxWidthRef.current.getBoundingClientRect();

            setParallaxDict(prevState => ({
                ...prevState,
                parallaxWidth: parallaxWidthBoundingRect.width
            }));
        }
    }, [parallaxWidthRef]);


    // Animation -> local animation
    React.useEffect(() => {
        if (animation !== "standby") {
            setParallaxDict(prevState => ({
                ...prevState,
                localAnimation: animation
            }));
        }
    }, [animation]);


    // Main loop
    useAnimationFrame(deltaTime => {
        if (parallaxDict.parallaxWidth) {
            const layerQuarter = parallaxDict.parallaxWidth / 4;

            for (let i = 0; i < parallaxDict.xArray.length; i++) {
                parallaxDict.xArray[i] -= parameters.defaultSpeed;

                if (Math.abs(parallaxDict.xArray[i]) > layerQuarter) {
                    parallaxDict.xArray[i] = 0;
                }
            }
        }

        setParallaxDict(prevState => ({
            ...prevState,
            localAnimation: animation
        }));
    });


    return (
        <div className="app-parallax">
            <div className="app-parallax__layer app-parallax__layer-1" ref={parallaxWidthRef}
                style={{transform: `translateX(${parallaxDict.xArray[0]}px)`}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-2"
                style={{transform: `translateX(${parallaxDict.xArray[1]}px)`}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-3"
                style={{transform: `translateX(${parallaxDict.xArray[2]}px)`}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-4"
                style={{transform: `translateX(${parallaxDict.xArray[3]}px)`}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-5"
                style={{transform: `translateX(${parallaxDict.xArray[4]}px)`}}
            ></div>

            <div className="absolute font-bold text-black top-6 left-6">
                {parallaxDict.xArray[0]} <br></br>
                {parallaxDict.xArray[1]} <br></br>
                {parallaxDict.xArray[2]} <br></br>
                {parallaxDict.xArray[3]} <br></br>
                {parallaxDict.xArray[4]}
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