import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";
import styles from "@styles/home.module.scss";

export default function ColorPicker(props: { state: any; }) {
  const { state } = props;
  const snap = useSnapshot(state);
  return (
    <div className={styles.colorPicker}>
      <HexColorPicker
        color={snap.color}
        onChange={(color) => (state.color = color)}
      />
    </div>
  );
}
