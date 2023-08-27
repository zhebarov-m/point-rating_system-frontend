import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import StudentForm from "../Forms/StudentForm";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

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

export default function AddStudentModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <Button style={{ color: "rgba(0, 0, 0, 0.77)" }} onClick={handleOpen}>
        <PersonAddIcon
          style={{ marginRight: "5px", color: "rgba(0, 0, 0, 0.67)" }}
        />
        Добавить студента
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
            <h2>Напишите данные студента:</h2>
            <StudentForm />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
