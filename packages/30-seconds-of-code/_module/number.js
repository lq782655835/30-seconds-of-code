/// Math

// RGBToHex(255, 165, 1); // 'ffa501'
export const RGBToHex = (r, g, b) =>
  ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");

// round(1.005, 2); // 1.01
export const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

export const inRange = (n, start, end = null) => {
  if (end && start > end) [end, start] = [start, end];
  return end == null ? n >= 0 && n < start : n >= start && n < end;
};

export const isEven = num => num % 2 === 0;

export const isDivisible = (dividend, divisor) => dividend % divisor === 0;
