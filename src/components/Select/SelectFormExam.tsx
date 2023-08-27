import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectFromExam() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel htmlFor="grouped-select">Форма отчетности</InputLabel>
        <Select defaultValue={1} id="grouped-select" label="Форма отчетности">
          <MenuItem value={1}>Экзамен (в устной форме)</MenuItem>
          <MenuItem value={2}>Зачет (в тестовой форме)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}