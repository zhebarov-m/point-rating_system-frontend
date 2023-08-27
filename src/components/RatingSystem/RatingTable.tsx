import { Box, FormControlLabel, Switch } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "../../axios";
import CircularProgressWithLabel from "./CircProgress"; // Путь к вашему файлу с CircularProgressWithLabel
import { FC, useEffect, useMemo, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import styles from "./RatingSystem.module.scss";

const API_URL = "/students";

type tDataStudents = {
  id: string;
  student: string;
  pointsSemester: number;
  currentAssessment: number;
  midtermAssessment: number;
  bonuses: number;
  absenceCount: number;
  attendanceScores: number | null;
  totalPoints: number;
};

const RatingTable: FC = () => {
  const [students, setStudents] = useState<tDataStudents[]>([]); //Вот где хранится массив данных с сервера со студентами
  const [paddingEnabled, setPaddingEnabled] = useState(true);

  console.log(students);
  
  
  const student = students.filter((item: tDataStudents) => !item.attendanceScores)
  
  console.log('без aScores', student);

  const getDataStudents = async () => {
    const { data } = await axios.get("/students"); //Получаем даннные с сервера
    const updatedData = data.map((el: any) => {
      return {
        ...el,
      };
    });

    setStudents(updatedData);
  };

  function renderProgress(params: any) {
    const totalScore =
      Number(params.row.pointsSemester) +
      Number(params.row.currentAssessment) +
      Number(params.row.midtermAssessment) +
      Number(params.row.bonuses) +
      Number(params.row.attendanceScores);

    return <CircularProgressWithLabel progressValue={totalScore} />;
  }

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: "id",
        headerName: "№",
        width: 50,
        align: "center",
        headerAlign: "center",
      },

      {
        field: "student",
        headerName: "ФИО Студента",
        width: 280,
        editable: false,
      },
      {
        field: "pointsSemester",
        flex: 1,
        headerAlign: "center",
        headerName: `Баллы за семестр`,
        width: 125,
        align: "center",
        type: "singleSelect",
        valueOptions: [1, 2, 3],
        editable: true,
      },
      {
        field: "currentAssessment",
        flex: 1,
        headerName: "Текущая аттестация",
        width: 140,
        align: "center",
        headerAlign: "center",
        editable: true,
      },
      {
        field: "midtermAssessment",
        flex: 1,
        headerName: "Рубежная аттестация",
        width: 190,
        align: "center",
        headerAlign: "center",
        editable: true,
      },
      {
        field: "bonuses",
        flex: 1,
        headerName: "Премиальные",
        headerAlign: "center",
        width: 100,
        align: "center",
        editable: true,
      },
      {
        field: "absenceCount",
        flex: 1,
        headerName: "Количество пропусков",
        width: 150,
        headerAlign: "center",
        align: "center",
        editable: true,
      },
      {
        field: "attendanceScores",
        flex: 1,
        headerName: "Баллы за посещаемость",
        width: 150,
        headerAlign: "center",
        align: "center",
        editable: true,
        valueGetter: (params) =>
          Math.floor(15 - Number(params.row.absenceCount) * ((15 / 120) * 9.5)),
      },
      {
        field: "totalScore",
        renderCell: paddingEnabled ? renderProgress : undefined,
        headerName: "Итого",
        width: 100,
        headerAlign: "center",
        valueGetter: !paddingEnabled
          ? (params) =>
              Number(params.row.pointsSemester) +
              Number(params.row.currentAssessment) +
              Number(params.row.midtermAssessment) +
              Number(params.row.bonuses) +
              Number(params.row.attendanceScores)
          : undefined,
        type: "number",
        align: "center",
      },
    ],
    [paddingEnabled]
  );

  const paddingOffClick = () => {
    setPaddingEnabled(!paddingEnabled);
  };
  useEffect(() => {
    getDataStudents(); //Вызываем функцию получения данных с сервера
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{ backgroundColor: "white" }}
        columns={columns}
        rows={students}
        getRowId={(row) => row.id}
        rowHeight={paddingEnabled ? 50 : 30}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 20, 30]}
        autoHeight
        columnHeaderHeight={60}
        getCellClassName={(params) =>
          params.field === "totalScore" ? styles.myCustomCell : ""
        }
        getRowClassName={
          (params) =>
            params.indexRelativeToCurrentPage % 2 === 1
              ? styles.eventRows
              : styles.oddRows // Добавляем класс для каждой строки
        }
      />
      <FormControlLabel
        onClick={paddingOffClick}
        control={<Switch />}
        label="Отключить внутрение отступы"
      />
    </Box>
  );
};

export default RatingTable;
