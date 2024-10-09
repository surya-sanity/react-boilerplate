// !Base util functions for the app which are not dependent to any module goes here

/**
 * Checks if two values are the same when converted to JSON strings.
 *
 * Note: This function does not handle circular references in objects or arrays,
 * and will throw a TypeError if encountered. Functions and symbols within the
 * objects or arrays are not considered in the comparison, as they are not
 * serialized by JSON.stringify.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns `true` if the JSON stringified versions of `a` and `b` are the same, otherwise `false`.
 */
export function isSameWhenStringified<T, U>(a: T, b: U): boolean {
  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch (error) {
    console.error("Failed to stringify the input: ", error);
    return false;
  }
}
