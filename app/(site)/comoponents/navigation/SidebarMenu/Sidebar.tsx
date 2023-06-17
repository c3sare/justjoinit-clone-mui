import Drawer from "@mui/material/Drawer";
import Head from "./components/SidebarHeading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { sidebarMenuElements } from "@/data/menuElements";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";

type SidebarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const closeDrawer = () => {
    setOpen(false);
  };

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
      <List>
        {sidebarMenuElements.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton LinkComponent={Link} href={item.href}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
