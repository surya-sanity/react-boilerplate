import { useEffect, useRef, useState } from "react";

/**
 * useDebounce
 *
 * A hook that debounces a value, waiting for {delay} milliseconds before updating the debounced value.
 *
 * @param {T} value the value to debounce
 * @param {number} [delay=500] the delay in milliseconds
 * @returns {T} the debounced value
 */
export const useDebounce = <T>(value: T, delay = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value as T);
  const timerRef = useRef<number>();

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};
