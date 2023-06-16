import { Box } from "@mui/material";

const Nav: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box
    component="nav"
    display="flex"
    alignItems="center"
    height="100%"
    flex="1"
  >
    {children}
  </Box>
);

export default Nav;
