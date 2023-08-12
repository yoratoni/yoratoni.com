import { useEffect, useRef } from "react";


/**
 * Custom hook for the "requestAnimationFrame" function.
 * Replaces setInterval for animations to obtain a consistent
 * framerate on any browser.
 * @param callback Called when the update of animation frame can be called.
 * @param dependencies A list of dependencies for the useEffect.
 */
export default function useAnimationFrame(
    callback: (deltaTime: number) => void,
    dependencies: unknown[]
) {
    const requestRef = useRef<number>(0);
    const previousTimeRef = useRef<number>(0);

    const animate = (time: number) => {
        if (previousTimeRef.current) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime);
        }

        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [...dependencies]);
}