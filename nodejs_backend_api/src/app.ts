import express, { Express, Request, Response } from 'express';
const app: Express = express();
import categoriesRouter from './routes/v1/categories.route'

const PORT = process.env.PORT || 9000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'Express + TypeScript Server'});
});
app.use('/api/v1/categories', categoriesRouter)


export default app