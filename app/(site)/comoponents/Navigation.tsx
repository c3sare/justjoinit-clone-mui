"use client";
import { Box, useTheme } from "@mui/material";
import Header from "./navigation/Header";
import MenuIcon from "@mui/icons-material/Menu";
import Nav from "./navigation/Nav";
import MenuLink from "./navigation/MenuLink";
import SquareButton from "./navigation/SquareButton";
import ThemeSwitchButton from "./navigation/ThemeSwitchButton";
import { ColorModeContext } from "./ToggleColorMode";
import { useContext, useState } from "react";
import IconButton from "./navigation/IconButton";
import Logo from "./navigation/Logo";
import Description from "./navigation/Description";
import Button from "../../../components/Button";
import SignInButton from "./navigation/SignInButton";
import Link from "next/link";
import MenuLinksBox from "./navigation/MenuLinksBox";
import Sidebar from "./navigation/SidebarMenu/Sidebar";
import { menuElements } from "@/data/menuElements";

const Navigation: React.FC = () => {
  const theme = useTheme();
  const { mode, setMode } = useContext(ColorModeContext);
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

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
          {menuElements.map((node) => (
            <MenuLink key={node.title} href={node.href}>
              {node.title}
            </MenuLink>
          ))}
        </MenuLinksBox>
        <Button
          LinkComponent={Link}
          variant="outlined"
          href="/add-offer"
          sx={{ "@media (max-width: 1024.95px)": { display: "none" } }}
        >
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
        <IconButton onClick={() => setIsOpenSidebar(true)}>
          <MenuIcon />
        </IconButton>
        <Sidebar open={isOpenSidebar} setOpen={setIsOpenSidebar} />
      </Box>
    </Header>
  );
};

export default Navigation;
