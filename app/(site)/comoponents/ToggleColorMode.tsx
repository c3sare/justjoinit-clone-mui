"use client";

import { PaletteOptions, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const ColorModeContext = React.createContext({
  mode: "dark",
  setMode: (prevState: "light" | "dark"): void => {},
});

const themes: {
  light: PaletteOptions;
  dark: PaletteOptions;
} = {
  light: {
    mode: "light",
    primary: {
      main: "#5F656B",
    },
    secondary: {
      main: "#ff4081",
      dark: "#ad1457",
    },
  },
  dark: {
    mode: "dark",
    primary: {
      main: "#5F656B",
      light: "#e3f2fd",
      dark: "rgba(255, 255, 255, 0.04)",
    },
    secondary: {
      main: "#f06292",
      dark: "#ad1457",
    },
    text: {
      primary: "rgba(255,255,255,0.8)",
      secondary: "#ffffff",
    },
    background: {
      default: "rgb(32, 32, 32)",
      paper: "#2C2C2C",
    },
  },
};

const ToggleColorMode: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useLocalStorage<"light" | "dark">("theme", "light");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: mode === "dark" ? themes["dark"] : themes["light"],
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
