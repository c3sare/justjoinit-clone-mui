import { Box } from "@mui/material";
import styled from "@emotion/styled";

const TypographyStyled = styled("p")(({ theme }) => ({
  color:
    (theme as any).palette.mode === "dark"
      ? "rgba(255,255,255,.80)"
      : "#99A1AB",
  fontSize: "0.875rem",
  "@media (max-width: 1024.95px)": {
    display: "none",
  },
}));

const Description: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box display="flex" alignItems="center" marginLeft="16px">
    <TypographyStyled>{children}</TypographyStyled>
  </Box>
);

export default Description;
