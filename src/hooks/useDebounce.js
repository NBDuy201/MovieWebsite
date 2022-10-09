import React, { useEffect } from "react";

export default function useDebounce(initValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = React.useState(initValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, initValue]);

  return debounceValue;
}
