import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import skillRoutes from './routes/skillRoutes';
import careerRoutes from './routes/careerRoutes';
import analysisRoutes from './routes/analysisRoutes';
import { sequelize } from './config/db';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/career', careerRoutes);
app.use('/api/analysis', analysisRoutes);

// Test DB
sequelize.authenticate().then(() => console.log('Database connected'));

export default app;
