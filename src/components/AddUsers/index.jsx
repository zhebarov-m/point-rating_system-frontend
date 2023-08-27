import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios";

import UsersType from "../UsersType/UsersType";
import ListSelectGroups from "../ListGropus";

import styles from "./Login.module.scss";

const type = ["student", "teacher", "moderator", "admin"];

export const AddUsers = () => {
  const [selectType, setSelectType] = useState(0);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phoneNumber: "",
    password: "",
    userType: "",
  });
  console.log(user);
  const handleChange = (event, newValue) => {
    setSelectType(newValue);
    setUser((prevUser) => ({
      ...prevUser,
      userType: type[selectType],
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    // Выполняем POST-запрос для добавления пользователя
    axios
      .post("/register", user, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Пользователь успешно зарегистрирован", response.data);
        // Дополнительная логика, например, перенаправление на другую страницу
      })
      .catch((error) => {
        console.error("Ошибка при регистрации пользователя", error);
      });
  };

  return (
    <div className={styles.controlPaper}>
      <Typography
        color={"#333333"}
        classes={{ root: styles.title }}
        variant="h4"
      >
        Создание пользователя
      </Typography>
    <div style={{ display: "flex", alignItems: "flex-start", gap: 15 }}>
      <UsersType selectType={selectType} onChangeClick={handleChange} />
      {selectType === 1 && <ListSelectGroups />}
    </div>
      <div style={{ width: "600px", margin: "0 auto" }}>
        <Typography variant="h6">Введите ФИО:</Typography>
        <div className={styles.fullname}>
          <TextField
            className={styles.field}
            label="Имя"
            value={user.firstName}
            name="firstName"
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            className={styles.field}
            label="Фамилия"
            value={user.lastName}
            name="lastName"
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            className={styles.field}
            label="Отчество"
            value={user.middleName}
            name="middleName"
            onChange={handleInputChange}
            fullWidth
          />
        </div>
        <Typography variant="h6">Дополнительная информация:</Typography>
        <div className={styles.fullname}>
          <TextField
            className={styles.field}
            label="Почта*"
            value={user.email}
            name="email"
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            className={styles.field}
            label="Номер телефона"
            value={user.phoneNumber}
            name="phoneNumber"
            onChange={handleInputChange}
            fullWidth
          />
        </div>
        <Typography variant="h6">Пароль для входа:</Typography>
        <div className={styles.passwordFlex}>
          <TextField
            className={styles.field}
            label="Пароль"
            value={user.password}
            name="password"
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            className={styles.field}
            label="Подтверждение пароля"
            value={user.password}
            name="password"
            onChange={handleInputChange}
            fullWidth
          />
        </div>
      </div>
      <div className={styles.flexUi}>
        <span></span>
        <Button
          disabled={selectType === 0}
          sx={{ textAlign: "right" }}
          size="large"
          variant="contained"
          onClick={handleAddUser} // Обновленный обработчик события
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};
