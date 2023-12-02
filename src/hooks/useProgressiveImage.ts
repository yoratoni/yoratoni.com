import { useEffect, useState } from "react";


export default function useProgressiveImage(src: string | undefined) {
    const [sourceLoaded, setSourceLoaded] = useState<string | null>(null);

    useEffect(() => {
        if (!src) return;

        const img = new Image();
        img.src = src;
        img.onload = () => setSourceLoaded(src);
    }, [src]);

    return sourceLoaded;
}