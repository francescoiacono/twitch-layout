import { useEffect, useState } from "react";
import { calculateFrothCount } from "./utils";

export const useFrothCount = (
  initialFrothCount: number,
  containerRef: React.RefObject<HTMLDivElement>
) => {
  const [frothCount, setFrothCount] = useState(initialFrothCount);

  // Calculate froth count on resize
  useEffect(() => {
    const handleResize = () => {
      const newCount = calculateFrothCount(initialFrothCount);
      setFrothCount(newCount);

      // Update CSS variable
      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--froth-count",
          String(newCount)
        );
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialFrothCount]);

  // Update CSS variable when frothCount changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--froth-count",
        String(frothCount)
      );
    }
  }, [frothCount]);

  return { frothCount };
};
