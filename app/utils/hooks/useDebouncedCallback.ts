//useDebouncedCallback

import { useCallback, useEffect, useRef } from 'react';

export default function useDebouncedCallback<
  T extends (...args: any[]) => void,
>(callback: T, delay: number) {
  const timeout = useRef<NodeJS.Timeout>();

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return debouncedCallback;
}
