import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({
  path: path.join(process.cwd(), 'dev.env')
});
const config = {
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}
export default config;
