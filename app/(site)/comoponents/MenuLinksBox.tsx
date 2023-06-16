import { Box, styled } from "@mui/material";

const BoxStyled = styled(Box)(() => ({
  "@media (max-width: 1024.95px)": {
    display: "none",
  },
}));

const MenuLinksBox: React.FC<React.PropsWithChildren> = ({ children }) => (
  <BoxStyled
    display="flex"
    alignItems="center"
    justifyContent="flex-end"
    flex="1 1 0%"
    marginLeft="auto"
    marginRight="0"
    width="100%"
    height="100%"
  >
    {children}
  </BoxStyled>
);

export default MenuLinksBox;