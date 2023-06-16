"use client";

import { styled, Paper } from "@mui/material";
import { PropsWithChildren } from "react";

const PaperStyled = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 68,
  background: theme.palette.mode === "dark" ? "#2C2C2C" : "#ffffff",
  borderBottom: `1px solid ${
    theme.palette.mode === "dark" ? "#3C3C3C" : "#E4E8F0"
  }`,
  boxShadow: "none",
  paddingLeft: 24,
  "@media (max-width: 1024.95px)": {
    height: 40,
    paddingLeft: 8,
  },
}));

const Header: React.FC<PropsWithChildren> = ({ children }) => (
  <PaperStyled>{children}</PaperStyled>
);

export default Header;
