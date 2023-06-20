import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";

import MoneyOutlinedIcon from "@mui/icons-material/MoneyOutlined";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import TodayIcon from "@mui/icons-material/Today";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";

export const menuElements = [
  {
    title: "Offers",
    href: "/",
    icon: <WorkOutlineIcon />,
  },
  {
    title: "Brand Stories",
    href: "/brands",
    icon: <BusinessOutlinedIcon />,
  },
  {
    title: "Geek",
    href: "/geek",
    icon: <TextSnippetOutlinedIcon />,
  },
  {
    title: "Matchmaking",
    href: "/matchmaking",
    icon: <WorkHistoryOutlinedIcon />,
  },
];

export const sidebarMenuElements = [
  {
    title: "Programista 100K",
    href: "/programista100k",
    icon: <MoneyOutlinedIcon />,
  },
  {
    title: "For Juniors",
    href: "/junior/",
    icon: <CastForEducationIcon />,
  },
  {
    title: "Program Ambasadorski",
    href: "/program-ambasadorski",
    icon: <SchoolIcon />,
  },
  {
    title: "IT Index",
    href: "/itx",
    icon: <LeaderboardIcon />,
  },
  {
    title: "Event",
    href: "/event",
    icon: <TodayIcon />,
  },
  {
    title: "Just Join Games",
    href: "/games",
    icon: <EmojiEventsIcon />,
  },
  {
    title: "Press Room",
    href: "/media",
    icon: <EditNoteIcon />,
  },
  {
    title: "Report",
    href: "/report",
    icon: <AssessmentOutlinedIcon />,
  },
  {
    title: "Careers",
    href: "/brands/story/just-join-it",
    icon: <RocketLaunchOutlinedIcon />,
  },
];

export const helpSidebarElements = [
  {
    title: "RSS",
    href: "/feed.atom",
    icon: <RssFeedIcon />,
    hideMobile: true,
  },
  {
    title: "Help",
    href: "/help",
    icon: <HelpOutlineOutlinedIcon />,
    hideMobile: false,
  },
  {
    title: "Terms",
    href: "/terms-and-privacy-policies",
    icon: <DifferenceOutlinedIcon />,
    hideMobile: false,
  },
];
