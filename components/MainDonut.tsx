import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import PleaseDonut from "@public/Pleasedonut.jsx";
import ColorPicker from "@/components/ColorPicker";

import styles from "@styles/home.module.scss";

// styles/variable.scss의 $mobileView와 맞춘 기준
const MOBILE_BREAKPOINT = 700;

export default function MainDonut(props: { state: any }) {
  const [isPicker, setIsPicker] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const updateIsMobile = () => setIsMobile(mql.matches);
    updateIsMobile();
    mql.addEventListener("change", updateIsMobile);
    return () => mql.removeEventListener("change", updateIsMobile);
  }, []);

  function handleColorChange() {
    setIsPicker(true)
  }
  return (
    <div className={styles.donutContainer}>
      <Canvas camera={{ zoom: isMobile ? 30 : 46 }} linear>
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
        <PleaseDonut state={props.state} onColorChange={handleColorChange} />
        <Environment preset="city" />
        <OrbitControls
          minPolarAngle={0.8}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
      <ColorPicker state={props.state} display={isPicker} />
    </div>
  );
}
