import styles from "@styles/home.module.scss";
import { useSnapshot } from "valtio";

export default function MainText(props: {state: any}) {
    const snap = useSnapshot(props.state)
  return (
    <div className={styles.maintext}>
      <h1>
        My name is
        <br />
        Hyerim
        <br />
        I&apos;m a<br />
        Graphic Designer
      </h1>
      <h2 style={{ color: snap.color }}>
        <br />
        Haley
        <br />
        <br />
        Web Developer
      </h2>
    </div>
  );
}
