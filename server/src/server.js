import express from 'express';
import route from '../routes/route';

const app = express();
app.use(express.json());
app.use(route);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is running on ${port} port`));

export default app;
