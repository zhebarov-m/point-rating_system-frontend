import * as React from "react";
import { NavLink } from "react-router-dom";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SiPointy } from "react-icons/si";
import {
  FcConferenceCall,
  FcCalendar,
  FcHome,
  FcGraduationCap,
  FcAutomatic,
} from "react-icons/fc";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountMenu from "../ProfileAccount/AccountMenu";
import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#333333", // Добавьте это свойство
  borderRadius: " 0px 30px 30px 0px",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: "#333333", // Добавьте это свойство
  borderRadius: " 0px 30px 30px 0px",
});

const openedMixin2 = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin2 = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin2(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin2(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const userIsAdmin = useSelector((state: any) => state.authMe.data);
  const [open, setOpen] = React.useState(true);

  const menuItems = React.useMemo(
    () => [
      {
        text: "Главная",
        icon: <FcHome style={{ fontSize: "22px" }} />,
        to: "/",
      },
      {
        text: "Балловая система",
        icon: <FcCalendar style={{ fontSize: "22px" }} />,
        to: "/rating",
      },
      {
        text: "Топ студентов",
        icon: <FcGraduationCap style={{ fontSize: "22px" }} />,
        to: "/top-students",
      },
      {
        text: "Лучшие группы",
        icon: <FcConferenceCall style={{ fontSize: "22px" }} />,
        to: "/best-groups",
      },
    ],
    []
  );
  const handleDrawerOpen = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleDrawerClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{ bgcolor: "#00336600", boxShadow: "none", width: "86%" }}
        position="fixed"
        open={open}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...{
                color: "#1976d2",
                bgcolor: "#1976d220",
                borderRadius: "50px",
              },
            }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <AccountMenu />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{ color: "#fff", display: "flex", justifyContent: "center" }}
        >
          <div style={{ textAlign: "center", margin: "10px 0px" }}>
            <SiPointy style={{ fontSize: "40px" }} />
          </div>
        </DrawerHeader>
        <Divider
          sx={{
            bgcolor: "#ffffff30",
            width: "80%",
            margin: "0 auto",
            borderRadius: "5px",
          }}
        />
        <List>
          {menuItems.map(({ text, icon, to }, index) => (
            <NavLink style={{ color: "inherit" }} to={to} key={text}>
              <ListItem disablePadding sx={{ display: "block", color: "#fff" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={
                      open
                        ? {
                            color: "#1976d2",
                            minWidth: 0,
                            mr: open ? 1 : "auto",
                            justifyContent: "center",
                          }
                        : {
                            color: "#1976d2",
                            minWidth: 0,
                            mr: open ? 1 : "auto",
                            justifyContent: "center",
                          }
                    }
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider
          sx={{
            bgcolor: "#ffffff30",
            width: "80%",
            margin: "0 auto",
            borderRadius: "5px",
          }}
        />
        <List>
          {userIsAdmin?.userType === "admin" && (
            <NavLink style={{ color: "inherit" }} to="/control-panel">
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  className={styles.controlPanelButton}
                  sx={{ justifyContent: open ? "initial" : "center", px: 2.5 }}
                >
                  <ListItemIcon
                    sx={{ mr: open ? 1 : "auto" }}
                    className={styles.controlPanelIcon}
                  >
                    <FcAutomatic style={{ fontSize: "25px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Панель управления"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          )}
        </List>
      </Drawer>
    </Box>
  );
}
