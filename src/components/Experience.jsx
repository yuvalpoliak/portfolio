import { ContactShadows, Environment, OrbitControls, Sky, Cloud, Clouds } from "@react-three/drei"
import { Avatar } from "./Avatar"
import { Suspense } from "react"
import { MeshBasicMaterial } from "three"

export const Experience = () => {
    return (
        <>
        <Suspense />
            <OrbitControls />
            <Sky />
            <Environment preset='park' />
            <Clouds material={MeshBasicMaterial}>
                <Cloud segments={40} bounds={[10, 7, -5]} volume={2} color="gray" opacity={0.5} />
            </Clouds>
            <group position={[0, -1, 0]}>
            <ContactShadows
              opacity={0.42}
              scale={10}
              blur={1}
              far={10}
              resolution={256}
              color={'black'}
              />
            <Avatar />
            <mesh  scale={5}  rotation-x={-Math.PI * 0.5} position-y={-0.001}>
                <planeGeometry />
                <meshStandardMaterial color={'green'} />
            </mesh>
            </group>

        </>
    )
}