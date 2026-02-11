import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';
import { User } from './User';

export class CareerGoal extends Model {
  declare id: number;
  declare goal: string;
  declare userId: number;
}

CareerGoal.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  goal: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
}, {
  sequelize,
  tableName: 'career_goals',
});

CareerGoal.belongsTo(User, { foreignKey: 'userId' });
User.hasOne(CareerGoal, { foreignKey: 'userId' });
