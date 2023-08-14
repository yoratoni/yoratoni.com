import {
    Color4,
    DirectionalLight,
    Engine,
    FreeCamera,
    HemisphericLight,
    Mesh,
    MeshBuilder,
    Scene,
    SpotLight,
    Vector3
} from "@babylonjs/core";
import { useEffect, useRef, useState } from "react";


type BabylonStorage = {
    engine: Engine | null;
    scene: Scene | null;
    cameras: {
        [key: string]: FreeCamera;
    };
    meshes: {
        [key: string]: Mesh;
    };
    lights: {
        [key: string]: HemisphericLight | SpotLight | DirectionalLight;
    };
};

export default function Babylon() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [storage, setStorage] = useState<BabylonStorage>({
        engine: null,
        scene: null,
        cameras: {},
        meshes: {},
        lights: {}
    });

    /**
     * Actions to be done when the scene is ready.
     * @param scene The Babylon scene that is ready.
     */
    const onSceneReady = (scene: Scene) => {
        const tmpStorage = {
            ...storage,
            cameras: {
                ...storage.cameras,
                main: new FreeCamera("main_camera", new Vector3(0, 5, -10), scene)
            },
            meshes: {
                ...storage.meshes,
                box: MeshBuilder.CreateBox("box", { size: 2 }, scene),
                ground: MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene)
            },
            lights: {
                ...storage.lights,
                main: new HemisphericLight("light", new Vector3(0, 1, 0), scene)
            }
        };

        // Scene background
        scene.clearColor = new Color4(0, 0, 0, 0);

        // Cameras
        tmpStorage.cameras["main"].setTarget(Vector3.Zero());

        // Canvas
        // const canvas = scene.getEngine().getRenderingCanvas();

        // Controls attached to canvas
        // tmpStorage.cameras["main"].attachControl(canvas, true);

        // Lights
        tmpStorage.lights["main"].intensity = 0.7;

        // Meshes
        tmpStorage.meshes["box"].position.y = 1;

        // Update storage
        setStorage({ ...tmpStorage });
    };

    /**
     * Actions to be done each frame.
     * @param scene The Babylon scene.
     */
    const onRender = (scene: Scene) => {
        const tmpStorage = {
            ...storage
        };

        // console.log(tmpStorage);

        if (tmpStorage.meshes["box"]) {
            const deltaTimeInMillis = scene.getEngine().getDeltaTime();

            const rpm = 10;
            tmpStorage.meshes["box"].rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
        }

        // Update storage
        setStorage({ ...tmpStorage });
    };

    // Mount
    useEffect(() => {
        const { current: canvas } = canvasRef;
        if (!canvas) return;

        // Engine & Scene
        const engine = new Engine(canvas, true);
        const scene = new Scene(engine);

        // Run once
        if (!scene.isReady()) {
            scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
        } else {
            onSceneReady(scene);
        }

        // Render
        engine.runRenderLoop(() => {
            if (scene) {
                onRender(scene);
                scene.render();
            }
        });

        // Resize
        const resize = () => {
            if (scene) {
                scene.getEngine().resize();
            }
        };

        if (window) {
            window.addEventListener("resize", resize);
        }

        // Unmount
        return () => {
            if (window) {
                window.removeEventListener("resize", resize);
            }

            if (scene) {
                scene.getEngine().dispose();
            }
        };
    }, []);

    return (
        <div className="w-full h-full">
            <canvas ref={canvasRef} className="w-full h-full focus:outline-none" />
        </div>
    );
}