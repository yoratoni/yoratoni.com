import React from "react";


/**
 * Custom hook for the JS "requestAnimationFrame" function.
 * Replaces setInterval for animations to obtain a consistent
 * framerate on any browser.
 * @param callback Called when the update of animation frame can be called.
 */
export const useAnimationFrame = (callback: IsAnimationFrameCallback) => {
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
    }, []);
};