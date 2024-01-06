import { proxy } from "valtio";

import MainDonut from "@/components/MainDonut";
import styles from "@styles/home.module.scss";
import MainText from "./MainText";

const state = proxy({
    current: null,
    color: '',
    offsetX: 0,
    offsetY: 0,
  });

export default function HeroSection() {
  return (
    <>
      <MainDonut state={state} />
      <MainText state={state}/>
    </>
  );
}
