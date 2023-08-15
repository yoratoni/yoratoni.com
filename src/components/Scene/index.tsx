import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default function Scene() {
    const [meshRotation, setMeshRotation] = useState<[number, number, number]>([0, 0, 0]);

    const parameters = {
        scale: 0.2,
    };

    // Models
    const gltf = useLoader(GLTFLoader, "models/crystals/scene.gltf");

    useEffect(() => {
        const interval = setInterval(() => {
            setMeshRotation(meshRotation => [
                meshRotation[0] + 0.01,
                meshRotation[1] + 0.01,
                meshRotation[2] + 0.01,
            ]);
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full max-h-full overflow-hidden">
            <Canvas className="!h-[1px] !min-h-full">
                <ambientLight intensity={0.1} />
                <directionalLight color="white" position={[0, 0, 5]} />

                <mesh
                    rotation={[0, 1.45, 0]}
                    scale={[parameters.scale, parameters.scale, parameters.scale]}
                >
                    <primitive object={gltf.scene} />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    );
}