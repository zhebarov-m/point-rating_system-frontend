import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AddUsers } from "../AddUsers";
import { FcAddDatabase } from "react-icons/fc";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function AddUserModal(props: any) {
  const { openSidebar } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <ListItemButton
        onClick={handleOpen}
        sx={{
          color: "rgba(0, 0, 0, 0.70)",
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            color: "#1976d2",
            minWidth: 0,
            mr: openSidebar ? 1 : "auto",
            justifyContent: "center",
          }}
        >
          <FcAddDatabase style={{ fontSize: "20px" }} />
        </ListItemIcon>
        <ListItemText
          primary="Новый пользователь"
          sx={{ opacity: openSidebar ? 1 : 0 }}
        />
      </ListItemButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <AddUsers />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
