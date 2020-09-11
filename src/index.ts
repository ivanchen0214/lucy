import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { router } from './routes/LoginRoutes';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';

const app = express();

app.use(bodyParser({ extended: true }));
app.use(cookieSession({ keys: ["asdfadsf"] }));
app.use(AppRouter.getInstance());
app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});