import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useState } from "react";
import CurrencySelect from "./CurrencySelect";
import CurrencyElement from "./CurrencyElement";

const StyledButton = styled("button")(({ theme }) => ({
  display: "block",
  width: 58,
  height: "100%",
  fontSize: 12,
  color: "#9e9e9e",
  border: "none",
  borderLeft: `1px solid ${
    (theme as any).palette.mode === "dark" ? "#3C3C3C" : "#E4E8F0"
  }`,
  borderRight: `1px solid ${
    (theme as any).palette.mode === "dark" ? "#3C3C3C" : "#E4E8F0"
  }`,
  background: "transparent",
  cursor: "pointer",
  "&:hover": {
    background: (theme as any).palette.mode === "dark" ? "#202020" : "#F3F6F8",
  },
  "@media (max-width: 1024.95px)": {
    width: 48,
    height: 40,
    padding: 0,
    margin: 0,
  },
}));

const currencies = ["PLN", "EUR", "USD", "GBP", "CHF", "Default"];

const SquareButton = () => {
  const [currency, setCurrency] = useState<string>(currencies[0]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "currency-popover" : undefined;

  const handleClickElement = (currency: string) => {
    setCurrency(currency);
    handleClose();
  };

  return (
    <>
      <StyledButton onClick={handleClick}>{currency}</StyledButton>
      <CurrencySelect
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {currencies.map((item, i) => (
          <CurrencyElement
            key={i}
            onClick={() => handleClickElement(item)}
            currentCurrency={currency === item}
          >
            {item}
          </CurrencyElement>
        ))}
      </CurrencySelect>
    </>
  );
};

export default SquareButton;
