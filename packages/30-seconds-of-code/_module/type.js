/// common
export const getType = v =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();

/// base
export const isNull = val => val === null;
export const isSymbol = val => typeof val === "symbol";
export const isUndefined = val => val === undefined;
export const isBoolean = val => typeof val === "boolean";
export const isNumber = val => typeof val === "number" && val === val;
/**
 * Returns true if the specified value is null or undefined, false otherwise.
 * @param {*} val
 */
export const isNil = val => val === undefined || val === null;
