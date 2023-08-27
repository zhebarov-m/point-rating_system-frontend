import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { School, SportsSoccer, Language } from '@mui/icons-material';

interface Subject {
  name: string;
  icon: React.ReactNode;
}

const subjects: Subject[] = [
  { name: 'Математика', icon: <School /> },
  { name: 'Физкультура', icon: <SportsSoccer /> },
  { name: 'Иностранный язык', icon: <Language /> },
];

const SchoolSubjectsList: React.FC = () => {
  return (
    <List>
      {subjects.map((subject, index) => (
        <ListItem key={index}>
          <ListItemIcon>{subject.icon}</ListItemIcon>
          <ListItemText primary={subject.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default SchoolSubjectsList;
