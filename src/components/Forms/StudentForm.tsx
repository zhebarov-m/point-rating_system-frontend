import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios";
import styles from "./StudentForm.module.scss";

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    student: "",
    pointsSemester: 0,
    currentAssessment: 0,
    midtermAssessment: 0,
    bonuses: 0,
    absenceCount: 0,
    attendanceScores: 15,
    totalScore: 0,
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddStudent = () => {
    // Выполните POST-запрос с использованием axios
    axios
      .post("/students", studentData)
      .then((response) => {
        console.log("Студент успешно добавлен", response.data);
        // Дополнительная логика, например, обновление списка студентов
      })
      .catch((error) => {
        console.error("Ошибка при добавлении студента", error);
      });
  };

  return (
    <div>
      <TextField
        label="ФИО Студента"
        name="student"
        value={studentData.student}
        onChange={handleInputChange}
        fullWidth
      />
      <div className={styles.flexContainer}>
        <Button variant="contained" onClick={handleAddStudent}>
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default StudentForm;
