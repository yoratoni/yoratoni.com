import { Engine, Scene } from "@babylonjs/core";
import { useEffect, useRef } from "react";


export default function Babylon() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const { current: canvas } = canvasRef;

        if (!canvas) {
            return;
        }

        const engine = new Engine(canvas, true);
        const scene = new Scene(engine);

        if (!scene.isReady()) {
            scene.onReadyObservable.addOnce((scene) => null);
        } else {
            
        }
    }, []);

    return (
        <div className="w-full h-full border">
            <canvas ref={canvasRef} />
        </div>
    );
}