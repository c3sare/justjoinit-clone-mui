"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

export const ColorModeContext = React.createContext({
  mode: "light",
  setMode: (prevState: "light" | "dark"): void => {},
});

const ToggleColorMode: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = React.useState<"dark" | "light">("light");

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
