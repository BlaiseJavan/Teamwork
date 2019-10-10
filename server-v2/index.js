import express from 'express';
import route from '../server/routes/routes';
import routev2 from './routes/routes';

const app = express();
app.use(express.json());
app.use(route);
app.use(routev2);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is running on ${port} port`));

app.get('/', (req, res) => {
  res.send('Welcom to Teamwork');
});

export default app;
