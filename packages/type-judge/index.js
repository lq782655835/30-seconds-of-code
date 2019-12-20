/// common
const getType = v =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();

/// base
export const isNull = val => val === null;
export const isSymbol = val => typeof val === "symbol";
export const isUndefined = val => val === undefined;
const isBoolean = val => typeof val === "boolean";
/**
 * Returns true if the specified value is null or undefined, false otherwise.
 * @param {*} val
 */
export const isNil = val => val === undefined || val === null;

/// number
export const isEven = num => num % 2 === 0;

const isDivisible = (dividend, divisor) => dividend % divisor === 0;
