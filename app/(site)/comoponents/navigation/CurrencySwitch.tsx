import React, { useState } from "react";
import CurrencySelect from "./Currency/CurrencySelect";
import CurrencyElement from "./Currency/CurrencyElement";
import { Button } from "@mui/material";

const currencies = ["PLN", "EUR", "USD", "GBP", "CHF", "Default"];

const CurrencySwitch = () => {
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
      <Button variant="square" onClick={handleClick}>
        {currency}
      </Button>
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

export default CurrencySwitch;
