import { FC, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import axios from "../../axios";
import { FormControlLabel } from "@mui/material";
interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  subjects: number[];
}

const TeacherData: FC<{ onTeacherSelect: (teacherId: number) => void }> = ({
  onTeacherSelect,
}) => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [selectedValue, setSelectedValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(Number(event.target.value));
    onTeacherSelect(Number(event.target.value));
  };

  const fetchUsers = async () => {
    const { data } = await axios.get("/users");
    const teachersData = data.filter((obj: any) => obj.userType === "teacher");
    return teachersData;
  };

  useEffect(() => {
    const fetchData = async () => {
      const teachers = await fetchUsers();
      setTeachers(teachers);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        gap: 10,
        flexWrap: "wrap",
        margin: '0px 50px'
      }}
    >
      {teachers
        .sort((a: Teacher, b: Teacher) => a.lastName.localeCompare(b.lastName))
        .map((teacher) => (
          <FormControlLabel
            sx={{
              width: "300px",
              boxShadow: "0px 0px 5px #33333320",
              padding: "2px 5px",
              borderRadius: 2,
            }}
            control={
              <Radio
                checked={selectedValue === teacher.id}
                onChange={handleChange}
                value={teacher.id}
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            }
            label={`${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`}
          />
        ))}
    </div>
  );
};

export default TeacherData;
