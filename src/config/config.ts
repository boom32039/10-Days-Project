import * as dotenv from 'dotenv';

const envType = process.env.MODE_ENV || 'development';

dotenv.config({ path: `.env.${envType}` });

export default () => ({
   port: parseInt(process.env.PORT) || 3000,
   mode: process.env.MODE_ENV,
   secret : process.env.SECRET ,
   database: {
      type: process.env.DATABASE_TYPE,
      host: process.env.DATABSE_HOST || 'localhost',
      port: parseInt(process.env.DATABSE_PORT),
      name: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
   },
});
