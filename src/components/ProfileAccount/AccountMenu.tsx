import { Fragment, useState } from "react";
import styles from "./Account.module.scss";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { AiOutlineSetting } from "react-icons/ai";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../redux/slice/auth";
import { selectIsAuth } from "../../redux/slice/authMe";
import { useAppDispatch } from "../../redux/store";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openProfile, setOpenProfile] = useState(false);
  const open = Boolean(anchorEl);
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state: any) => state.authMe.data);
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenProfile(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenProfile(false);
  };

  const handleClickLogout = () => {
    if (window.confirm("Правда выходишь?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "#00000099",
        }}
      >
        <Typography sx={{ minWidth: 100, fontWeight: 500 }}>
          {`${userData?.lastName} ${userData?.firstName[0]}.${userData?.middleName[0]}.`}
        </Typography>
        <Tooltip title="Управление аккаунтом">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{
              ml: 2,
              display: "flex",
              gap: "10px",
              bgcolor: "#1976d220",
              padding: "5px 12px 5px 7px",
              borderRadius: "20px",
            }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              className={
                openProfile
                  ? styles.avatarRotateShift
                  : !open
                  ? styles.avatarReverseRotateShift
                  : ""
              }
              sx={{ width: 32, height: 32, bgcolor: "orange" }}
            ></Avatar>
            <AiOutlineSetting
              className={
                openProfile
                  ? styles.settingsIcon
                  : !open
                  ? styles.rotateSettings
                  : ""
              }
              style={{ color: "1976d2", fontSize: "19px" }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
            fontWeight: 500,
            color: "#444444",
            marginBottom: "10px",
          }}
        >
          <Avatar sx={{ fontSize: "30px", bgcolor: "orange" }}></Avatar>
          <span>
            {`${userData?.lastName} ${userData?.firstName[0]}.${userData?.middleName[0]}.`}
          </span>
        </div>
        <Divider />
        <MenuItem>
          <Avatar /> Мой аккаунт
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Добавить другой аккаунт
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Настройки
        </MenuItem>
        <MenuItem onClick={handleClickLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Выйти
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
