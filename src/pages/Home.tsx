import { FC } from "react";
import BarChart from "../components/Charts/bar-chart/BarChart";
import DoughnutChart from "../components/Charts/doughnut-chart/DoughnutChart";
import InfoOneUser from "../components/UserInfo/InfoOneUser";
import {
  FaUserGraduate,
  FaUniversity,
  FaCanadianMapleLeaf,
} from "react-icons/fa"; // Импортируем иконки
import { FaPeopleGroup } from "react-icons/fa6"; // Импортируем иконки
import SchoolSubjectsList from "../components/SubjectsList";

const Home: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        marginTop: 80,
        color: "#333333",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <InfoOneUser>
          {{
            role: "Студент",
            name: "Жебаров Магомед Рамзанович",
            icon: <FaUserGraduate />, // Передаем другую иконку (например, FaUserTie)
            iconBackgroundColor: "#3a72ab", // Передаем другой цвет фона иконки
          }}
        </InfoOneUser>
        <InfoOneUser>
          {{
            role: "Группа",
            name: "ИСТ-17",
            icon: <FaPeopleGroup />, // Передаем другую иконку (например, FaUserTie)
            iconBackgroundColor: "#d63333", // Передаем другой цвет фона иконки
          }}
        </InfoOneUser>
        <InfoOneUser>
          {{
            role: "Специальность",
            name: "Информационные системы и технологии",
            icon: <FaUniversity />, // Передаем другую иконку (например, FaUserTie)
            iconBackgroundColor: "#6f9c51", // Передаем другой цвет фона иконки
          }}
        </InfoOneUser>
        <InfoOneUser>
          {{
            role: "Год обучения",
            name: "4",
            size: 40,
            margin: 30,
            icon: <FaCanadianMapleLeaf />, // Передаем другую иконку (например, FaUserTie)
            iconBackgroundColor: "#ff830f", // Передаем другой цвет фона иконки
          }}
        </InfoOneUser>
      </div>
      <h2 style={{ fontSize: 30, fontWeight: 500 }}>График успеваемости</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "980px",
            padding: "10px",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BarChart />
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "470px",
            padding: "10px",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DoughnutChart />
        </div>
      </div>
      <h2 style={{ fontSize: 30, fontWeight: 500 }}>Успеваемость: Рейтинг </h2>
      <SchoolSubjectsList />
    </div>
  );
};

export default Home;
