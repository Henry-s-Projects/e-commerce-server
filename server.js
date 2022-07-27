import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import ConnectMongoDB from './src/database/mongodb';
import mainRoutes from './src/routes';

dotenv.config({ path: './src/config/.env' });

const whitelist = ['http://localhost:3000'];

const app = express();
app.set('trust proxy', 1);
app.use(express.json());
app.use(
  cors({ credentials: true, origin: [...whitelist, process.env.FRONTEND_URL] })
);
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Connect to mongodb
ConnectMongoDB();
// Routes
mainRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT);
});

export default app;
