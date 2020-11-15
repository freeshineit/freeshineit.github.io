import styles from "./Index.module.scss";
import ShineShao from "@components/ShineShao";

const Index = () => (
  <div className={styles.container}>
    <ShineShao />
  </div>
);

Index.displayName = "tsx";
export default Index;
