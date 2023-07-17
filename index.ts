import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import MovementController from "./src/controllers/MovementController";
import BalanceController from "./src/controllers/BalanceController";
import { balances, movements } from "./src/utils/fakers";
import { Movement } from './types/Movement';
import { Balance } from './types/Balance';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const secret = process.env.SECRET || 'F?R9K7K!ceJs4jh3uFq9#.C[+r585*';

declare module 'express-session' {
  export interface SessionData {
    movements: Movement[];
    balances: Balance[];
  }
}

app.set('trust proxy', 1) // trust first proxy
// parse application/json
app.use(bodyParser.json())
app.use(session({
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}), (req, res, next) => {
  req.session.movements = movements;
  req.session.balances = balances;
  next();
});

new MovementController(app);
new BalanceController(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});