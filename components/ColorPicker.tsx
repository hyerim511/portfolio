import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";
import styles from "@styles/home.module.scss";

export default function ColorPicker(props: { state: any, display: boolean; }) {
  const { state } = props;
  const snap = useSnapshot(state);
  return (
    <div className={styles.colorPicker} style={snap.current !== null ? {top: snap.offsetY + 'px', left: snap.offsetX + 'px', display: 'block'} : {display: 'none'}}>
      <HexColorPicker
        color={snap.color}
        onChange={(color) => (state.color = color)}
      />
    </div>
  );
}
