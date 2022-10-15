import React from "react";


/**
 * Custom hook to get the dimensions of the window.
 * @returns An object containing the width & the height of the window.
 */
export const useWindowDimensions = () => {
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;

        return {
            width,
            height
        };
    };

    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

    React.useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};


/**
 * Custom hook for the JS "requestAnimationFrame" function.
 * Replaces setInterval for animations to obtain a consistent
 * framerate on any browser.
 * @param callback Called when the update of animation frame can be called.
 * @param dependencies A list of dependencies for the useEffect.
 */
export const useAnimationFrame = (
    callback: IsAnimationFrameCallback,
    dependencies: IsAnimationDependency[]
) => {
    const requestRef = React.useRef<number>(0);
    const previousTimeRef = React.useRef<number>(0);

    const animate = (time: number) => {
        if (previousTimeRef.current) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime);
        }

        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [...dependencies]);
};