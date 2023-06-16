import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

type CurrencyElementProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  currentCurrency: boolean;
};

const StyledButton = styled(Button, {
  shouldForwardProp: (name) => name !== "currentCurrency",
})<{ currentCurrency: boolean }>(({ theme, currentCurrency }) => ({
  display: "flex",
  margin: "4px 16px",
  padding: "8px 16px",
  backgroundColor: currentCurrency
    ? (theme as any).palette.mode === "dark"
      ? "rgb(57, 57, 57)"
      : "rgb(255, 248, 251)"
    : (theme as any).palette.mode === "dark"
    ? "rgb(44, 44, 44)"
    : "rgb(255, 255, 255)",
  borderRadius: "12px",
  justifyContent: "space-between",
  width: "calc(100% - 32px)",
  fontSize: "0.875rem",
  color: currentCurrency
    ? "rgb(255, 64, 129)"
    : (theme as any).palette.mode === "dark"
    ? "rgba(255, 255, 255, 0.8)"
    : "rgb(55, 71, 79)",
  "&:hover": {
    backgroundColor: "rgba(55, 71, 79, 0.04)",
  },
}));

const CurrencyElement: React.FC<CurrencyElementProps> = ({
  children,
  onClick,
  currentCurrency,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      endIcon={currentCurrency ? <CheckIcon /> : null}
      currentCurrency={currentCurrency}
    >
      {children}
    </StyledButton>
  );
};

export default CurrencyElement;
