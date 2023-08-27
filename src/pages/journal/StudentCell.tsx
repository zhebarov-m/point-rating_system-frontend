import React from 'react';
import { Paper } from '@mui/material';

interface StudentCellProps {
  studentName: string;
}

const StudentCell: React.FC<StudentCellProps> = ({ studentName }) => {
  return (
    <Paper elevation={3} className="student-cell">
      {studentName}
    </Paper>
  );
};

export default StudentCell;
