import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface SkillBarProps {
  roadmap: { skill: string; resources: string[] }[];
}

const SkillBar = ({ roadmap }: SkillBarProps) => {
  const data = {
    labels: roadmap.map((r) => r.skill),
    datasets: [
      {
        label: 'Target Level',
        data: roadmap.map(() => 5),
        backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo glass feel
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255,255,255,0.1)',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255,255,255,0.1)',
        },
        beginAtZero: true,
        max: 5,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SkillBar;
