import { useEffect, useRef } from 'react';

type Callback = (...args: any[]) => void;

interface UseDebounceParams {
  callback: Callback;
  delay: number;
}

const useDebounce = ({ callback, delay }: UseDebounceParams) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback: Callback = (...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce;
