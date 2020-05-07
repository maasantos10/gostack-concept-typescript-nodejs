/**
 * Project: Go Stack NodeJs and TypeScript Challenge
 * Author: Marcos Santos
 * Date: May, 2, 2020.
 * Description: This project aims to show the concepts
 * and techniques presented and learned during the the
 * NodeJs and TypeScript training.
 * https://github.com/maasantos10/gostack-concept-typescript-nodejs
 */

import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

export default app;
