import dotenv from 'dotenv';
dotenv.config();
import { Config } from '../types/config';

const config: Config = {
  jwt: {
    secret: process.env.JWT_SECRET || '',
  

  },
  port: process.env.PORT || '3000',
  database: {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'username',
    DB_PASSWORD: process.env.DB_PASSWORD || 'password',
    DB_NAME: process.env.DB_NAME || 'dbname',
  },
  bcrypt: {
    saltRounds: process.env.BCRYPT_SALT_ROUNDS ? Number(process.env.BCRYPT_SALT_ROUNDS) : 10,
  },
};

export default config;
