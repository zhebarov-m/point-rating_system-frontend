import { Typography } from "@mui/material";
import { Slider } from "@mui/material";

const colors = [
  { width: 200, color: "#9e9e9e", type: "Статус пользователя не выбран" },
  { width: 200, color: "#1976d2", type: "Студент" },
  { width: 200, color: "#66bb6a", type: "Учитель" },
  { width: 200, color: "#ff9800", type: "Модератор" },
  { width: 200, color: "#e57373", type: "Администратор" },
];

export default function UserType(props: any) {
  const { selectType, onChangeClick } = props;

  return (
    <div>
      <Typography sx={{ color: "#333333" }} variant="h6">
        {colors[selectType].type}
      </Typography>
      <Slider
        sx={colors[selectType]}
        disabled={false}
        marks
        max={2}
        min={0}
        size="medium"
        valueLabelDisplay="auto"
        value={selectType}
        onChange={onChangeClick}
      />
    </div>
  );
}
