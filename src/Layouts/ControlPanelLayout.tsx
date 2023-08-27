import React from "react";
import { Outlet } from "react-router";

import AdminActionsSpeedDial from "../components/SpeedDial/AdminActionsSpeedDial";
import MyAccordion from "../components/Accordion/MyAccordion";

const ControlPanel: React.FC = () => {
  
  return (
    <div style={{ marginTop: "70px", width: "100%", margin: '70px auto' }}>
      <div
        style={{
          // backgroundColor: "#333333",
          width: "90%",
          margin: "0px auto",
          padding: "50px 0px 10px 0px",
          borderRadius: "50px",
        }}
      >
        <MyAccordion />
        {/* <StepperTeacher /> */}

        <AdminActionsSpeedDial />
        <Outlet />
      </div>
    </div>
  );
};

export default ControlPanel;
