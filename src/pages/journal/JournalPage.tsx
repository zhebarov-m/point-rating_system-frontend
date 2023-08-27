import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TextField } from '@mui/material';

interface JournalProps {
  students: string[];
  dates: string[];
}

const Journal: React.FC<JournalProps> = ({ students, dates }) => {
  const createRow = (id: number, student: string, dates: string[]) => {
    const row: { [key: string]: any } = { id, student };
    dates.forEach((date, dateIndex) => {
      const cellKey = `date${dateIndex}`;
      row[cellKey] = '';
    });
    return row;
  };

  const initialRows = students.map((student, studentIndex) =>
    createRow(studentIndex + 1, student, dates)
  );

  const columns: GridColDef[] = [
    { field: 'id', headerName: '№', width: 70 },
    { field: 'student', headerName: 'Ученики', width: 200 },
    ...dates.map((date, index) => ({ field: `date${index}`, headerName: date, width: 120 })),
  ];

  const [rows, setRows] = useState(initialRows);

  const handleCellChange = (params: any, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, field } = params;
    const value = event.target.value;
  
    setRows((prevRows) =>
      prevRows.map((row) => {
        if (row.id === id) {
          return { ...row, [field]: value };
        }
        return row;
      })
    );
  };

  return (
    <div style={{ height: 400, width: 900 }}> {/* Обновленная ширина */}
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick  // Отключение выделения при щелчке
        components={{
          Cell: ({ field, id, value }: any) => (
            <TextField
              fullWidth
              value={value}
              onChange={(event) => handleCellChange({ field, id }, event)}
            />
          ),
        }}
        componentsProps={{
          cell: { style: { padding: '8px' } },
        }}
      />
    </div>
  );
};

export default Journal;
