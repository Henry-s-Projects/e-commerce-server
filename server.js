import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import ConnectMongoDB from './src/database/mongodb';
import mainRoutes from './src/routes';
// import path from 'path';

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

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJjODQ4ODJhMDg0OWIyOTIwOTU3ZGY4IiwibmFtZSI6IlZ1IEx1dSIsImVtYWlsIjoidHJ1b25ndnVrdDIwMDBAZ21haWwuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNjU3ODg1MzQ3LCJleHAiOjE2NTg0OTAxNDd9.jzrH-shJcDP1x3_fvl2VhgU67aNSjn1LXLhj2IwtY1M';

app.post('/a', (req, res) => {
  res.cookie('refreshToken', token, {
    httpOnly: true,
    path: '/user/refresh_token',
  });

  res.json({ status: 'ok' });
});

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT);
});
