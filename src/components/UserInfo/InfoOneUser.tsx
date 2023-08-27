import React, { FC, ReactNode } from "react";
import { FaUserGraduate } from "react-icons/fa"; // Импортируем иконки

interface InfoOneUserProps {
  children: {
    role: string;
    name: string;
    size?: number;
    margin?: number;
    icon?: ReactNode; // Пропс для передачи иконки
    iconBackgroundColor?: string; // Пропс для передачи цвета фона иконки
  };
}

const InfoOneUser: FC<InfoOneUserProps> = ({ children }) => {
  const { role, name, size, margin, icon, iconBackgroundColor } = children;

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        width: 350,
        height: 150,
        borderRadius: 15,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3
          style={{
            color: "#444444",
            padding: "0px 5px 10px 0px",
            fontSize: 15,
          }}
        >
          {role}
        </h3>
        <p
          style={{
            marginLeft: margin,
            fontSize: size || 18,
            fontWeight: 500,
            width: 200,
            lineHeight: '20px',
          }}
        >
          {name}
        </p>
      </div>
      <div
        style={{
          width: 80,
          height: 80,
          backgroundColor: iconBackgroundColor || "#508ff4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 35,
          color: "white",
          borderRadius: 10,
        }}
      >
        {icon || <FaUserGraduate />}
      </div>
    </div>
  );
};

export default InfoOneUser;
