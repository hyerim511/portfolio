import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";

import PleaseDonut from "@public/PleaseDonut";
import ColorPicker from "@/components/ColorPicker";

const state = proxy({
  current: null,
  color: '',
});

export default function MainDonut() {
  function handleTest() {
    console.log("test");
  }
  return (
    <>
      <Canvas camera={{ zoom: 34 }} linear>
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 80, 20]} intensity={2} />
        <directionalLight position={[-10, -10, 10]} intensity={2} />
        <directionalLight position={[-180, -120, -120]} intensity={1} />
        <PleaseDonut state={state} onTest={handleTest} />
        <Environment preset="city" />
        <OrbitControls
          minPolarAngle={0.8}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
      <ColorPicker state={state} />
    </>
  );
}
