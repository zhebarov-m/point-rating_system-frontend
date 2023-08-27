import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectGroup() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 320 }}>
        <InputLabel htmlFor="grouped-select">Группа</InputLabel>
        <Select defaultValue={3} id="grouped-select" label="Группа">
          <ListSubheader>Первый курс студентов</ListSubheader>
          <MenuItem value={1}>Неизвестно</MenuItem>
          <MenuItem value={2}>Неизвестно</MenuItem>
          <ListSubheader>Второй курс студентов</ListSubheader>
          <MenuItem value={3}>И1.21-21</MenuItem>
          <MenuItem value={4}>И1.21-22</MenuItem>
          <MenuItem value={5}>И2.21-22</MenuItem>
          <MenuItem value={6}>И2.21-23</MenuItem>
          <ListSubheader>Третий курс студентов</ListSubheader>
          <MenuItem value={7}>П2.20-32</MenuItem>
          <ListSubheader>Четвертый курс студентов</ListSubheader>
          <MenuItem value={8}>Option 3</MenuItem>
          <MenuItem value={9}>Option 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}