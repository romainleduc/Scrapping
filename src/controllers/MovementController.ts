import { Express } from 'express';
import MovementService from '../services/MovementService';
import BalanceService from '../services/BalanceService';

class MovementController {
  constructor(app: Express) {
    app.get('/movements', (req, res) => {
      const { month, year } = req.query;
      const movementService = new MovementService(req);

      if (month || year) {
        return res.json(movementService.findManyByDate(Number(month), Number(year)));
      }

      return res.json(movementService.findMany());
    });

    /**
     * Ajoute une nouvelle opération manuellement
     */
    app.post('/movements', (req, res) => {
      const movementService = new MovementService(req);
      const { date, label, amount } = req.body;
      const isAdded = movementService.add(label, date, amount);
      return res.sendStatus(isAdded ? 200 : 500);
    });

    app.put('/movements/validation', (req, res) => {
      const { month, year } = req.body;
      const movementService = new MovementService(req);
      const balanceService = new BalanceService(req);

      if (month === undefined || year === undefined) {
        return res.sendStatus(400);
      }

      const movements = movementService.findManyByDate(Number(month), Number(year));
      const balances = balanceService.findManyByDate(Number(month), Number(year));

      if (movements.length === 0 || balances.length === 0) {
        return res.sendStatus(400);
      }

      const totalMouvementAmount = movementService.getTotalMouvementAmount(movements);
      const lastBalanceAmount = balanceService.getLastBalanceAmount(balances);

      if (totalMouvementAmount === lastBalanceAmount) {
        movements.forEach((movement) => {
          movementService.update(movement.id, { checked: true })
        });
        return res.sendStatus(202);
      }

      return res.status(418).send({
        reasons: [
          {
            message: `The bank transactions provided do not correspond with the final balance`,
            balance: lastBalanceAmount,
            bankTransactions: totalMouvementAmount,
          }
        ]
      })
    });

    app.put('/movements/:id/amount', (req, res) => {
      const movementService = new MovementService(req);
      const movement = movementService.findOne(Number(req.params.id));
      const { amount } = req.body;

      if (!movement) {
        return res.sendStatus(404);
      }

      const isUpdated = movementService.update(Number(req.params.id), { amount });
      return res.sendStatus(isUpdated ? 200 : 500);
    });

    app.delete('/movements/:id', (req, res) => {
      const movementService = new MovementService(req);
      const movement = movementService.findOne(Number(req.params.id));

      if (!movement) {
        return res.sendStatus(404);
      }

      const isUpdated = movementService.delete(Number(req.params.id));
      return res.sendStatus(isUpdated ? 200 : 500);
    })
  }
}

export default MovementController;