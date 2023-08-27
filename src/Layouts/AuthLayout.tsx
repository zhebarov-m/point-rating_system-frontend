import { FC } from "react";
import { Outlet } from "react-router";
import styles from "./Auth.module.scss";

const AuthLayout: FC = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.blueBackground}>
        </div>
          <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
