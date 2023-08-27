import { FC, useEffect, useState } from "react";
import axios from "../../axios";
import { Autocomplete, TextField } from "@mui/material";

interface iSubject {
  id: number;
  subjectName: string;
}

const SubjectsData: FC<{ onTeacherSelect: (teacherId: number) => void }> = ({
  onTeacherSelect,
}) => {
  const [subjects, setSubjects] = useState<iSubject[]>([]);

  const fetchUsers = async () => {
    const { data } = await axios.get("/subjects");

    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const subjectsData = await fetchUsers();
      setSubjects(subjectsData);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={subjects.map(
          (subject) => subject.subjectName
        )}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
};

export default SubjectsData;
