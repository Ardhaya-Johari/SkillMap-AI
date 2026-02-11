import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

export class User extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
  declare name?: string;
  declare age?: number;
}

User.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
}, {
  sequelize,
  tableName: 'users',
});
