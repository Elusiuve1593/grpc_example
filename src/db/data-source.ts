import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from 'src/user/user.entity';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User],
  synchronize: false,
  migrations: ['src/db/migrations/*.js'],
  migrationsRun: false,
});

export default AppDataSource;
