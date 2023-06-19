import ButtonMui from "@mui/material/Button";
import styled from "@emotion/styled";
import { Theme } from "@mui/material";

const Button = styled(ButtonMui)(({ theme, variant, color }) => ({
  borderRadius: 99999,
  height: 38,
  padding: "6px 16px",
  margin: "0 4px",
  whiteSpace: "nowrap",
  backgroundColor:
    variant === "outlined" && (theme as Theme).palette.mode === "dark"
      ? "#393939"
      : color,
  textTransform: "none",
  transition:
    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  ...(variant === "contained"
    ? {
        "@media (max-width: 1024.95px)": {
          height: "calc(100% - 5px)",
          marginLeft: "auto",
          "& > .MuiButton-endIcon": {
            display: "none",
          },
        },
      }
    : {}),
}));

export default Button;
