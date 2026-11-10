import { useState, useEffect } from "react";

// useState gibi çalışır, ama değeri tarayıcının LocalStorage'ında da saklar.
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* depolama doluysa veya kapalıysa sessizce geç */
    }
  }, [key, value]);

  return [value, setValue];
}
