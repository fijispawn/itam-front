import { useLayoutEffect } from "react";
import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useLayoutEffect(() => {
    document.getElementById('root').setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
