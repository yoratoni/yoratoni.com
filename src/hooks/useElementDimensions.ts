import { RefObject, useEffect, useState } from "react";


/**
 * Custom hook to get the dimensions of an HTML element.
 * @returns An object containing the width & the height of the element.
 */
export default function useElementDimensions(ref: RefObject<HTMLElement> | null) {
    const [elementDimensions, setElementDimensions] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        const handleResize = () => {
            setElementDimensions({
                width: ref?.current?.clientWidth || 0,
                height: ref?.current?.clientHeight || 0
            });
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [ref]);

    return elementDimensions;
}