"use client";

import {
  Theme,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const ColorModeContext = React.createContext({
  mode: "dark",
  setMode: (prevState: "light" | "dark"): void => {},
});

const ToggleColorMode: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useLocalStorage<"light" | "dark">("theme", "light");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ setMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
