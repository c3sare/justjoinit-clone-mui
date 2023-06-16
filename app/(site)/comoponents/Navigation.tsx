"use client";
import { Box, useTheme } from "@mui/material";
import Header from "./Header";
import MenuIcon from "@mui/icons-material/Menu";
import Nav from "./Nav";
import MenuLink from "./MenuLink";
import SquareButton from "./SquareButton";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { ColorModeContext } from "./ToggleColorMode";
import { useContext } from "react";
import IconButton from "./IconButton";
import Logo from "./Logo";
import Description from "./Description";
import Button from "./Button";
import SignInButton from "./SignInButton";
import Link from "next/link";
import MenuLinksBox from "./MenuLinksBox";

const Navigation: React.FC = () => {
  const theme = useTheme();
  const { mode, setMode } = useContext(ColorModeContext);

  return (
    <Header>
      <Logo />

      <Nav>
        <Description>#1 Job Board for tech industry in Europe</Description>
        <ThemeSwitchButton
          checked={mode === "dark"}
          onChange={(e) => setMode(e.target.checked ? "dark" : "light")}
          theme={theme}
        />
        <MenuLinksBox>
          <MenuLink href="/">Offers</MenuLink>
          <MenuLink href="/brands">Brand Stories</MenuLink>
          <MenuLink href="/geek">Geek</MenuLink>
          <MenuLink href="/matchmaking">Matchmaking</MenuLink>
        </MenuLinksBox>
        <Button LinkComponent={Link} href="/add-offer">
          Post a Job
        </Button>
        <SignInButton>Sign in</SignInButton>
        <SquareButton />
      </Nav>
      <Box
        width="68px"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          "@media (max-width: 1024.95px)": {
            width: 40,
          },
        }}
      >
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
    </Header>
  );
};

export default Navigation;
