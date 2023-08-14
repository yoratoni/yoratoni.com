import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";


export default function Scene() {
    const [meshRotation, setMeshRotation] = useState<[number, number, number]>([0, 0, 0]);

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

                <mesh rotation={meshRotation}>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    );
}