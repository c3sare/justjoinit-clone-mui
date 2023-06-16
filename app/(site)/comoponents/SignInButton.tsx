import ButtonMui from "@mui/material/Button";
import styled from "@emotion/styled";
import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type SignInButtonProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = styled(ButtonMui)(() => ({
  borderRadius: 99999,
  height: 38,
  padding: "6px 16px",
  color: "white",
  backgroundColor: "#f06292",
  textTransform: "none",
  marginLeft: 4,
  marginRight: 18,
  whiteSpace: "nowrap",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#ad1457",
  },
  "& > span": {
    marginLeft: "0",
  },
  "@media (max-width: 1024.95px)": {
    marginLeft: "auto",
    marginRight: "10px",
    padding: "4px 16px",
    height: "auto",
  },
}));

const SignInButton: React.FC<SignInButtonProps> = ({ children, onClick }) => (
  <Button
    variant="contained"
    onClick={onClick}
    endIcon={<KeyboardArrowDownIcon />}
  >
    {children}
  </Button>
);

export default SignInButton;
