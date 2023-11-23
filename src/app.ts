import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/', UserRoutes );



const getAController = (req: Request, res: Response) => {
    const a = 10;
    res.status(200).json({ success: true, message: 'OK', data: a });
};
  
  app.get('/', getAController);
  
export default app;