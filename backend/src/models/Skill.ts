import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';
import { User } from './User';

export class Skill extends Model {
  declare id: number;
  declare name: string;
  declare level: number;
  declare userId: number;
}

Skill.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  level: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
}, {
  sequelize,
  tableName: 'skills',
});

Skill.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Skill, { foreignKey: 'userId' });
