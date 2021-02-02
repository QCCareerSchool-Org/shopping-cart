import { useEffect, useRef } from 'react';

/**
 * Runs a function every time a value changes
 * @param value the value to track
 * @param callback the function to run
 */
export function useChangedValue<T>(value: T, callback: (current: T, previous: T) => void): void {
  const prevValueRef = useRef<T>(value);
  useEffect(() => {
    const prevValue = prevValueRef.current;
    if (prevValue !== value) {
      prevValueRef.current = value;
      callback(value, prevValue);
    }
  });
}
