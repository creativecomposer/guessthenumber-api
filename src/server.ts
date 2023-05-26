import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (_, res) {
  res.status(200);
  res.json({ message: 'Call one of the endpoints under /api/v1' });
});

if (process.env.NODE_ENV === 'development') {
  app.listen(process.env.PORT || '3500', function () {
    console.log('Server started');
  });
} else {
  // At production mode, do not start server here. The script at ./bin/www will run prod server
  console.log(`Node environment is ${process.env.NODE_ENV}`);
}

export default app;
