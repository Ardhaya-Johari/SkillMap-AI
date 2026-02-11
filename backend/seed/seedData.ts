import { sequelize } from '../config/db';
import { User } from '../models/User';
import { Skill } from '../models/Skill';
import { CareerGoal } from '../models/CareerGoal';
import bcrypt from 'bcryptjs';

const seed = async () => {
  try {
    await sequelize.sync({ force: true }); // reset DB

    console.log('Database synced');

    // Create dummy users
    const password = await bcrypt.hash('password123', 10);
    const user1 = await User.create({ email: 'alice@example.com', password, name: 'Alice', age: 20 });
    const user2 = await User.create({ email: 'bob@example.com', password, name: 'Bob', age: 22 });

    // Add skills for users
    await Skill.bulkCreate([
      { name: 'Python', level: 3, userId: user1.id },
      { name: 'React', level: 2, userId: user1.id },
      { name: 'SQL', level: 4, userId: user1.id },

      { name: 'Python', level: 4, userId: user2.id },
      { name: 'React', level: 3, userId: user2.id },
      { name: 'AI/ML', level: 2, userId: user2.id },
    ]);

    // Add career goals
    await CareerGoal.create({ goal: 'Fullstack Developer', userId: user1.id });
    await CareerGoal.create({ goal: 'Data Scientist', userId: user2.id });

    console.log('Seed data created successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
