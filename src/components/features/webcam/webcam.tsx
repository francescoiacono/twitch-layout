import { BeerFroth } from "@/components/effects/beer-froth";
import styles from "./webcam.module.scss";

export const Webcam: React.FC = () => {
  return (
    <div className={styles.container}>
      <BeerFroth />
    </div>
  );
};
