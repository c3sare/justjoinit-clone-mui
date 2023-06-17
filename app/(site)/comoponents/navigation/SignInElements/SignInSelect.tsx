import { Popover } from "@mui/material";
import styled from "@emotion/styled";

const PopoverStyled = styled(Popover)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  ".MuiPopover-paper": {
    margin: "16px 16px 0px 0px",
    padding: "8px 16px",
    backgroundColor:
      (theme as any).palette.mode === "dark" ? "#121212" : "#ffffff",
  },
}));

type SignInSelectProps = {
  children: React.ReactNode;
  id?: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
};

const SignInSelect: React.FC<SignInSelectProps> = ({
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
      {children}
    </PopoverStyled>
  );
};

export default SignInSelect;
