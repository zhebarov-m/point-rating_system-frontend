import { useRef, useEffect } from "react";

let myChart: any = null;

const bgColors = [
  "rgb(239, 83, 80, 0.6)",
  "rgb(66, 165, 245, 0.6)",
  "rgb(102, 187, 106, 0.6)",
];

const DoughnutChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const loadChart = async () => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext("2d");
        if (ctx) {
          const Chart = (await import("chart.js/auto")).default;

          if (myChart) {
            myChart.destroy();
          }

          myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
              labels: ["Оценка 3", "Оценка 4", "Оценка 5"],
              datasets: [
                {
                  label: "Количество",
                  data: [300, 50, 100],
                  backgroundColor: bgColors,
                  borderWidth: 1,
                  borderRadius: 5,
                  hoverOffset: 3,
                },
              ],
            },
            options: {
              responsive: true,
            },
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
  }, []);

  return (
    <div style={{ width: 400, margin: "20px 0px" }}>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
};

export default DoughnutChart;
