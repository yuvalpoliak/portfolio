import React from "react";
import { Canvas,  } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import './styles.css'


const App = () => {
  return (
    <Canvas shadows camera={{ fov: 30, position: [3,2,3] }}>
    <color attach="background" args={['white']} />
    <Experience />
    </Canvas>
  );
};

export default App;
