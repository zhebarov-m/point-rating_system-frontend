import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import ColorsRating from "../RatingSystem/ColorsRating";
import ColorLensIcon from "@mui/icons-material/ColorLens";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function ColorsRatingModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <Button style={{ color: "rgba(0, 0, 0, 0.77)" }} onClick={handleOpen}>
        <ColorLensIcon
          style={{ marginRight: "0px", marginBottom: "5px", color: "orange" }}
        />
        Что означают эти цвета?
      </Button>
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
            <ColorsRating onClick={handleClose} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
