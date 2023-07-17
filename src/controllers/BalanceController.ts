import { Express } from 'express';

class BalanceController {
  constructor(app: Express) {
    app.get('/balances', (req: any, res) => {
      return res.json(req.session.balances);
    });
    
  }
}

export default BalanceController;