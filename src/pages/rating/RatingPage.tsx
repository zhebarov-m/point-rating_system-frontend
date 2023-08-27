import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "../rating/RatingPage.module.scss";
import SettingsModal from "../../components/Modal/SettingsModal";
import AddStudentModal from "../../components/Modal/AddStudent";
import ColorsRatingModal from "../../components/Modal/ColorsRatingModal";
import RatingTable from "../../components/RatingSystem/RatingTable";


const RatingPage: FC = () => {
  const { open } = useSelector((state: RootState) => state.sidebarOpen);

  return (
    <>
      <div
        className={open ? styles.isOpen : styles.isClose}
        style={{ marginTop: "70px", color: '#333333'}}
      >
        <h1 style={{ fontSize: "45px", textAlign: "center" }}>
          Балльно-рейтинговая система (БРС)
        </h1>
        {/* <InfoAboveTable /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <SettingsModal />
          <div>
            <AddStudentModal />
            <ColorsRatingModal />
          </div>
        </div>

        <RatingTable />
      </div>
    </>
  );
};

export default RatingPage;
