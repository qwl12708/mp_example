/**
 * @param {any} fn
 * @returns {fn is function}
 */
export function isFunc(fn) {
  return typeof fn === 'function';
}

/**
 * @param {any} o
 * @returns {o is Record<any, any>}
 */
export function isObj(o) {
  return typeof o === 'object' && o !== null;
}

/**
 * @param {object} o
 * @returns {o is empty object}
 */
export function isEmptyObj(object) {
  return Reflect.ownKeys(object).length === 0;
};

/**
 * @param {any} s
 * @returns {s is string}
 */
export function isString(s) {
  return typeof s === 'string';
}

/**
 * @param {any} n
 * @returns {n is number}
 */
export function isNumber(n) {
  return typeof n === 'number' && !Number.isNaN(n);
}

/**
 * @param {any} n
 * @returns {n is number}
 */
export function isInteger(n) {
  return isNumber(n) && Number.isInteger(n);
}

/**
 * @param {any} s
 * @returns {s is (null | void)}
 */
export function isEmpty(s) {
  return s === null || s === undefined;
}

export function isBlank(s) {
  return isEmpty(s) || (isString(s) && s.trim() === '');
}

export function isEmptyUrlParam(v) {
  return typeof v === 'undefined'
    || v === 'undefined'
    || v === 'null'
    || v === null;
}
