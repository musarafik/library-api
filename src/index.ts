import express, {Request, Response, Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bookRoutes from './routes/books';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors())
app.use('/books', bookRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Testing typescript express server');
});

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});