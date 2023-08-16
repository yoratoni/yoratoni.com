import { useFrame, useLoader } from "@react-three/fiber";
import { ReactNode } from "react";
import { AnimationMixer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import config from "@/configs/main.config";


export default function Mesh(
    props: {
        position?: [number, number, number],
        rotation?: [number, number, number],
        scale?: [number, number, number],
        gltfPath?: string;
        geometry?: ReactNode;
    }
) {
    let gltfObj = null;
    let mixer: AnimationMixer | null = null;


    if (props.gltfPath) {
        gltfObj = useLoader(GLTFLoader, props.gltfPath);

        console.log(gltfObj);
    }

    if (config.three.meshAnimationId !== undefined && gltfObj) {
        mixer = new AnimationMixer(gltfObj.scene);
        const action = mixer.clipAction(gltfObj.animations[config.three.meshAnimationId]);
        action.play();
    }

    useFrame((state, delta) => {
        mixer?.update(delta);
    });

    return (
        <mesh
            position={props.position}
            rotation={props.rotation}
            scale={props.scale}
            receiveShadow
        >
            {gltfObj && (
                <primitive
                    object={gltfObj.scene}
                />
            )}

            {(!gltfObj && props.geometry) && (
                props.geometry
            )}
        </mesh>
    );
}