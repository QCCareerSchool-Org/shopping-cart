import { useEffect, useRef } from 'react';

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
