import ButtonMui from "@mui/material/Button";
import styled from "@emotion/styled";

const Button = styled(ButtonMui)(({ theme, color }) => ({
  borderRadius: 99999,
  height: 38,
  border: "1px solid rgba(255, 255, 255, 0.23)",
  padding: "6px 16px",
  margin: "0 4px",
  whiteSpace: "nowrap",
  borderColor: (theme as any).palette.mode === "dark" ? "#3C3C3C" : "#E4E8F0",
  color:
    (theme as any).palette.mode === "dark"
      ? "rgba(255,255,255,.80)"
      : "#5F656B",
  backgroundColor:
    color || (theme as any).palette.mode === "dark" ? "#393939" : "transparent",
  textTransform: "none",
  transition:
    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  "@media (max-width: 1024.95px)": {
    display: "none",
  },
}));

export default Button;
