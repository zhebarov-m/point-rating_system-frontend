import { FC } from "react";

import { Outlet } from "react-router";
import Sidebar from "../components/Menu/Sidebar";

const MainLayout: FC = () => {
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "left" }}>
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
