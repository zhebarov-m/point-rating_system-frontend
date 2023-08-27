import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectDiscipline() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 320 }}>
        <InputLabel htmlFor="grouped-select">Предмет</InputLabel>
        <Select defaultValue={1} id="grouped-select" label="Предмет">
          <MenuItem value={1}>Web-программирование</MenuItem>
          <MenuItem value={2}>Технология защиты баз данных</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}