import { useRef } from "react";
import { useFrothCount } from "@/hooks/effect/use-froth-count";
import styles from "./beer-froth.module.scss";

interface BeerFrothProps {
  initialFrothCount?: number;
}

export const BeerFroth: React.FC<BeerFrothProps> = ({
  initialFrothCount = 10,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { frothCount } = useFrothCount(initialFrothCount, containerRef);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.froth}>
        {[...Array(frothCount)].map((_, i) => (
          <div
            key={i}
            className={styles.circle}
            style={
              {
                "--random-scale": Math.random() + 1,
                "--random-delay": `${Math.random() * -2}s`,
                "--random-duration": `${3 + Math.random()}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
};
