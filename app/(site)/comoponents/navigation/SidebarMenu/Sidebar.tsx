import Drawer from "@mui/material/Drawer";
import Head from "./components/SidebarHeading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { menuElements, sidebarMenuElements } from "@/data/menuElements";
import {
  Box,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { Divider } from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import SignInSelectButton from "../SignInElements/SignInSelectButton";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";

type SidebarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const theme = useTheme();
  const [openMore, setOpenMore] = useState<boolean>(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  const handleToggleMoreMenuItems = () => {
    setOpenMore(!openMore);
  };

  const sidebarMoreElements = sidebarMenuElements.map((item) => (
    <ListItem key={item.href} disablePadding>
      <ListItemButton LinkComponent={Link} href={item.href}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    </ListItem>
  ));

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={closeDrawer}
      sx={{
        "& > .MuiPaper-root": {
          width: "320px",
          maxWidth: "100%",
        },
      }}
    >
      <Head onClickButton={closeDrawer} />
      <List
        sx={{
          "@media (min-width: 1024.96px)": {
            display: "none",
          },
        }}
      >
        {menuElements.map((item) => (
          <ListItemButton
            key={item.title}
            LinkComponent={Link}
            href={item.href}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
      <List
        sx={{
          "@media (min-width: 1024.96px)": {
            display: "none",
          },
        }}
      >
        <Divider sx={{ borderWidth: "4px" }} />
        <ListItemButton onClick={handleToggleMoreMenuItems}>
          <ListItemText primary="More" />
          {openMore ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMore} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {sidebarMoreElements}
          </List>
        </Collapse>
        <Divider sx={{ borderWidth: "4px" }} />
      </List>
      <List
        sx={{
          "@media (max-width: 1024.95px)": {
            display: "none",
          },
        }}
      >
        {sidebarMoreElements}
        <Divider sx={{ borderWidth: "4px" }} />
      </List>
      <List>
        <ListItemButton
          LinkComponent={Link}
          href="/feed.atom"
          sx={{
            "@media (max-width: 1024.95px)": {
              display: "none",
            },
          }}
        >
          <ListItemIcon>
            <RssFeedIcon />
          </ListItemIcon>
          <ListItemText primary="RSS" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <HelpOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItemButton>
        <ListItemButton LinkComponent={Link} href="/terms-and-privacy-policies">
          <ListItemIcon>
            <DifferenceOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Terms" />
        </ListItemButton>
      </List>
      <Box
        sx={{
          paddingLeft: "24px",
          paddingRight: "20px",
          paddingBottom: "16px",
        }}
      >
        <SignInSelectButton
          startIcon={<FaceOutlinedIcon />}
          href="/devs"
          sx={{
            "& .MuiButton-startIcon": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgb(57, 57, 57)"
                  : "rgb(255, 248, 251)",
              "& svg": {
                color: "rgb(255, 64, 129)",
              },
            },
          }}
        >
          Sign in as a developer
        </SignInSelectButton>
        <SignInSelectButton
          startIcon={<WorkOutlineOutlinedIcon />}
          href="/users/sign_in"
          sx={{
            "@media (max-width: 1024.95px)": {
              display: "none",
            },
            "& .MuiButton-startIcon": {
              backgroundColor: "rgb(243, 229, 245)",
              "& svg": {
                color: "rgb(171, 71, 188)",
              },
            },
          }}
        >
          Sign in to Employer Panel
        </SignInSelectButton>
      </Box>
      <Box
        sx={{
          "@media (max-width: 1024.95px)": {
            display: "none",
          },
        }}
        display="flex"
        justifyContent="center"
      >
        <IconButton
          size="large"
          LinkComponent={Link}
          href="/"
          sx={{ fill: "#5F656B" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton size="large" LinkComponent={Link} href="/">
          <LinkedInIcon />
        </IconButton>
        <IconButton size="large" LinkComponent={Link} href="/">
          <YouTubeIcon />
        </IconButton>
        <IconButton size="large" LinkComponent={Link} href="/">
          <InstagramIcon />
        </IconButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
