import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ShareIcon from "@mui/icons-material/Share";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: (
      <Link
        style={{
          color: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        to="/control-panel/add-users"
      >
        <AssignmentIndIcon />
      </Link>
    ),
    name: "Добавить пользователя",
  },
  {
    icon: (
      <Link
        style={{
          color: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        to="/control-panel/add-subjects"
      >
        <AutoStoriesIcon />
      </Link>
    ),
    name: "Добавить предмет",
  },
  {
    icon: (
      <Link
        style={{
          color: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        to="/control-panel/add-groups"
      >
        <Diversity3Icon />
      </Link>
    ),
    name: "Добавить Группу",
  },
  {
    icon: (
      <Link
        style={{
          color: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        to="/control-panel/assign-teachers"
      >
        <ShareIcon />
      </Link>
    ),
    name: "Привязка данных в БРС",
  },
];

export default function AdminActionsSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1, position: "fixed", bottom: 0, right: 35 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
