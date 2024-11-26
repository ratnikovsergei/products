import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setdebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
