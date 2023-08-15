import { useLoader } from "@react-three/fiber";
import { ReactNode } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default function Mesh(
    props: {
        position?: [number, number, number],
        rotation?: [number, number, number],
        scale?: [number, number, number],
        gltfPath?: string
        geometry?: ReactNode
    }
) {
    let gltfObj = null;
    if (props.gltfPath) {
        gltfObj = useLoader(GLTFLoader, props.gltfPath);
    }

    return (
        <mesh
            position={props.position}
            rotation={props.rotation}
            scale={props.scale}
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