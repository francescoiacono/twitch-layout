/**
 * Calculates the froth count (number of bubbles) based on the initial froth count and the window's inner width.
 *
 * @param initialFrothCount - The initial number of froths to be used in the calculation.
 * @returns The calculated froth count, adjusted based on the window's inner width.
 */
export const calculateFrothCount = (initialFrothCount: number): number => {
  return (
    Math.ceil(window.innerWidth / (window.innerWidth / initialFrothCount)) + 2
  );
};
