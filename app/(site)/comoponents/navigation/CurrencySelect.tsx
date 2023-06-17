import { Popover, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const PopoverStyled = styled(Popover)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  ".MuiPopover-paper": {
    marginTop: "16px",
    backgroundColor:
      (theme as any).palette.mode === "dark" ? "#121212" : "#ffffff",
  },
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  margin: "12px 16px 8px",
  fontSize: "16px",
  fontWeight: 600,
  color: (theme as any).palette.mode === "dark" ? "#9e9e9e" : "#5F656B",
  width: "236px",
}));

const Heading: React.FC<PropsWithChildren> = ({ children }) => (
  <Paragraph>{children}</Paragraph>
);

type CurrencySelectProps = {
  children: React.ReactNode;
  id?: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
};

const CurrencySelect: React.FC<CurrencySelectProps> = ({
  children,
  id,
  open,
  anchorEl,
  onClose,
}) => {
  return (
    <PopoverStyled
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Heading>Select your currency</Heading>
      {children}
    </PopoverStyled>
  );
};

export default CurrencySelect;
