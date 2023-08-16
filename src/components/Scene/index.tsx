import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import StatsImpl from "stats.js";

import Mesh from "@/components/Mesh";
import config from "@/configs/main.config";


export default function Scene() {
    const Stats = () => {
        const [stats] = useState(() => new StatsImpl());

        useEffect(() => {
            stats.showPanel(0);
            document.body.appendChild(stats.dom);
            return () => document.body.removeChild(stats.dom) as unknown as void;
        }, []);

        return useFrame(state => {
            stats.begin();
            state.gl.render(state.scene, state.camera);
            stats.end();
        }, 1);
    };

    return (
        <div className="w-full h-full max-h-full overflow-hidden">
            <Canvas className="!h-[1px] !min-h-full" shadows>
                <directionalLight color="white" position={[0, 0, 5]} castShadow />

                <Mesh
                    gltfPath={`assets/models/${config.three.mesh}/scene.gltf`}
                    position={[
                        config.three.meshPosition.x,
                        config.three.meshPosition.y,
                        config.three.meshPosition.z
                    ]}
                    scale={Array(3).fill(config.three.meshScale) as [number, number, number]}
                />

                {config.three.showStats && <Stats />}
            </Canvas>
        </div>
    );
}