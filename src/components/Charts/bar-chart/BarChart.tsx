import axios from '../../../axios';
import React, { useRef, useEffect, useState } from 'react';

let myChart: any = null;
const monthlyData = [
  { month: "Сентябрь", points: 48 },
  { month: "Октябрь", points: 18 },
  { month: "Ноябрь", points: 27 },
  { month: "Декабрь", points: 32 },
  { month: "Январь", points: 28 },
  { month: "Февраль", points: 18 },
  { month: "Март", points: 27 },
  { month: "Апрель", points: 32 },
  { month: "Май", points: 12 },
  { month: "Июнь", points: 9 },
  // ... Добавьте остальные месяцы и баллы
];

type tDataStudents = {
  id: number;
  student: string;
  pointsSemester: number;
  currentAssessment: number;
  midtermAssessment: number;
  bonuses: number;
  absenceCount: number;
  attendanceScores: number;
  totalScore: number;
};

const BarChart = () => {
  const [students, setStudents] = useState<tDataStudents[]>([]); //Вот где хранится массив данных с сервера со студентами
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  console.log(students);
  

  const getDataStudents = async () => {
    const { data } = await axios.get("/students"); //Получаем даннные с сервера
    const updatedData = data.map((el: any) => {
      return {
        ...el,
      };
    });

    setStudents(updatedData);
  };

  useEffect(() => {
    getDataStudents(); //Вызываем функцию получения данных с сервера
  }, []);

  useEffect(() => {
    const loadChart = async () => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        if (ctx) {
          const Chart = (await import('chart.js/auto')).default;

          if (myChart) {
            myChart.destroy();
          }

          const labels = students.map(item => item.student)
          const points = students.map(item => item.totalScore)
          const id = students.map(item => item.id )
          
          myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [{
                label: 'Личный график в группе',
                data: points,
                backgroundColor: id.map(item => item === 5 ? 'rgba(254, 2, 2, 0.6)' : 'rgba(54, 162, 235, 0.6)') ,
                borderWidth: 1,
                borderRadius: 10,
              }],
            },
            options: {
              scales: {
                x: {
                  beginAtZero: true,
                  grid: {
                    display: false, // Убираем вертикальные линии
                  },
                },
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        }
      }
    };

    loadChart();

    return () => {
      if (myChart) {
        myChart.destroy();
        myChart = null;
      }
    };
  }, [students]);

  return (
    <div style={{width: 880, margin: '20px 0px'}}>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
};

export default BarChart;
