import React from "react";
import "./AppParallax.css";


const AppParallax = ({
    instruction
}: IsParallaxInstruction) => {
    const directionStylePrev: IsParallaxDirectionStyle = {
        left: "auto",
        right: "0",
        animationName: "slidePrev",
        backgroundPosition: "right"
    };

    const directionStyleNext: IsParallaxDirectionStyle = {
        left: "0",
        right: "auto",
        animationName: "slideNext",
        backgroundPosition: "left"
    };

    const parameters = {
        intervalValue: 8,
        maxSpeed: 50,
        defaultSpeed: 1,
        speedModifier: 1,
        defaultSpeedArray: [60, 50, 40, 30, 15]
    };

    const speedInterval = React.useRef<NodeJS.Timer | undefined>(undefined);

    const [parallaxDict, setParallaxDict] = React.useState<IsParallaxDict>({
        directionStyle: directionStyleNext,         // Current direction CSS styling applied to layer divs
        speedArray: parameters.defaultSpeedArray,   // Contains the speed of each layer (=animation-duration)
        localInstruction: "standby"                 // Local instruction with reset to standby when done
    });

    React.useEffect(() => {
        if (instruction !== "standby") {
            setParallaxDict(prevState => ({...prevState, localInstruction: instruction}));
        }
    }, [instruction]);

    React.useEffect(() => {
        if (parallaxDict.localInstruction !== "standby") {
            let tempDirectionStyle: IsParallaxDirectionStyle;
            let animationPhase: IsAnimationPhase = "accelerate";
            let speed = parameters.defaultSpeed;

            if (parallaxDict.localInstruction === "next") {
                tempDirectionStyle = directionStyleNext;
            } else {
                tempDirectionStyle = directionStylePrev;
            }

            speedInterval.current = setInterval(() => {
                if (animationPhase === "accelerate") {
                    if (speed < parameters.maxSpeed) {
                        speed += parameters.speedModifier;
                    } else {
                        animationPhase = "decelerate";
                        speed = parameters.maxSpeed;
                    }
                }

                if (animationPhase === "decelerate") {
                    if (speed > parameters.defaultSpeed) {
                        speed -= parameters.speedModifier;
                    } else {
                        animationPhase = "accelerate";
                        speed = parameters.defaultSpeed;
                    }
                }

                const tempSpeedArray = parameters.defaultSpeedArray.map(
                    layerSpeed => Math.round((layerSpeed / speed) * 100) / 100
                );

                setParallaxDict(prevState => ({...prevState, speedArray: tempSpeedArray}));

                if (speed === parameters.defaultSpeed) {
                    clearInterval(speedInterval.current);
                }
            }, parameters.intervalValue);

            setParallaxDict(prevState => ({
                ...prevState,
                localInstruction: "standby",
                directionStyle: tempDirectionStyle
            }));
        }
    }, [
        parallaxDict.localInstruction,
        parallaxDict.speedArray
    ]);

    return (
        <div className="app-parallax">
            <div className="app-parallax__layer app-parallax__layer-1"
                style={{animationDuration: `${parallaxDict.speedArray[0]}s`, ...parallaxDict.directionStyle}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-2"
                style={{animationDuration: `${parallaxDict.speedArray[1]}s`, ...parallaxDict.directionStyle}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-3"
                style={{animationDuration: `${parallaxDict.speedArray[2]}s`, ...parallaxDict.directionStyle}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-4"
                style={{animationDuration: `${parallaxDict.speedArray[3]}s`, ...parallaxDict.directionStyle}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-5"
                style={{animationDuration: `${parallaxDict.speedArray[4]}s`, ...parallaxDict.directionStyle}}
            ></div>

            <div className="absolute font-bold text-black top-6 left-6">
                {parallaxDict.speedArray[0]} <br></br>
                {parallaxDict.speedArray[1]} <br></br>
                {parallaxDict.speedArray[2]} <br></br>
                {parallaxDict.speedArray[3]} <br></br>
                {parallaxDict.speedArray[4]}
            </div>
        </div>
    );
};


export default AppParallax;

// speedInterval.current = setInterval(() => {
//     setSpeedValue(speedValue - parameters.speedModifier);
// }, 100);

// return () => clearInterval(speedInterval.current);


// const tempSpeedArray = parameters.defaultSpeedArray.map(
//     speed => Math.max(0.01, Math.min(speed /*/ tempSpeed*/, 64))
// );