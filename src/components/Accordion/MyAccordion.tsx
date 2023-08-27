import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AddUsers } from "../AddUsers";
import { Translate } from "@mui/icons-material";
import { MdPersonAdd } from "react-icons/md";
import { RiGroup2Fill } from "react-icons/ri";
import { PiBooksFill } from "react-icons/pi";
import StepperTeacher from "../Stepper/StepperTeacher";
import { AddGroups } from "../AddGroups";

export default function MyAccordion() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        <Accordion
          style={{
            width: "750px",
            height: "700px",
            borderRadius: 10,
            padding: "10px",
          }}
          defaultExpanded
        >
          <AccordionSummary
            sx={{ position: "relative" }}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "98%",
                padding: "12px 10px",
                color: "white",
                flexShrink: 0,
                fontSize: 18,
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#ff830f",
                borderRadius: 2,

                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <MdPersonAdd style={{ fontSize: "25px" }} /> Добавление нового
              пользователя
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <StepperTeacher />
          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{
            width: "750px",
            height: "700px",
            borderRadius: 10,
            padding: "10px",
          }}
          defaultExpanded
        >
          <AccordionSummary
            sx={{ position: "relative" }}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "98%",
                padding: "12px 10px",
                color: "white",
                flexShrink: 0,
                fontSize: 18,
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#d63333",
                borderRadius: 2,

                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <RiGroup2Fill style={{ fontSize: "25px" }} /> Добавить группу
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AddGroups />
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        <Accordion
          style={{
            width: "750px",
            height: "700px",
            borderRadius: 10,
            padding: "10px",
          }}
          defaultExpanded
        >
          <AccordionSummary
            sx={{ position: "relative" }}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "98%",
                padding: "12px 10px",
                color: "white",
                flexShrink: 0,
                fontSize: 18,
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#3a72ab",
                borderRadius: 2,

                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <MdPersonAdd style={{ fontSize: "25px" }} /> Добавить нового
              пользователя
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AddUsers />
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            width: "750px",
            height: "700px",
            borderRadius: 10,
            padding: "10px",
          }}
          defaultExpanded
        >
          <AccordionSummary
            sx={{ position: "relative" }}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "98%",
                padding: "12px 10px",
                color: "white",
                flexShrink: 0,
                fontSize: 18,
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#6f9c51",
                borderRadius: 2,

                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <PiBooksFill style={{ fontSize: "25px" }} /> Добавить дисциплину
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </div>
      {/* <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
