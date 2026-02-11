import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface SkillRadarProps {
  skills: { name: string; level: number }[];
  gaps: { name: string; gap: number }[];
}

const SkillRadar = ({ skills, gaps }: SkillRadarProps) => {
  const data = {
    labels: skills.map((s) => s.name),
    datasets: [
      {
        label: 'Your Level',
        data: skills.map((s) => s.level),
        backgroundColor: 'rgba(99, 102, 241, 0.35)', // Indigo glass
        borderColor: '#6366F1',
        borderWidth: 2,
        pointBackgroundColor: '#6366F1',
      },
      {
        label: 'Skill Gap',
        data: gaps.map((g) => g.gap),
        backgroundColor: 'rgba(244, 63, 94, 0.25)', // Soft red/pink
        borderColor: '#F43F5E',
        borderWidth: 2,
        pointBackgroundColor: '#F43F5E',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255,255,255,0.1)',
        },
        grid: {
          color: 'rgba(255,255,255,0.1)',
        },
        pointLabels: {
          color: 'white',
          font: {
            size: 12,
          },
        },
        ticks: {
          backdropColor: 'transparent',
          color: 'white',
          stepSize: 1,
        },
        min: 0,
        max: 5,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default SkillRadar;
