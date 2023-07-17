import dayjs from "dayjs";
import { Request } from "express";
import { Movement } from "../../types/Movement";

class MovementService {
  req: Request<{}, any, any, any, Record<string, any>>;

  constructor(req: Request<{}, any, any, any, Record<string, any>>) {
    this.req = req;
  }

  /**
   * Retrouve une opération dans la session depuis son id
   */
  findOne(id: number): Movement | undefined {
    return this.req.session.movements?.find((movement: any) => movement.id === id);
  }

  /**
   * Retourne toute les opérations qui se trouvent dans la session
   */
  findMany(): Movement[] {
    return this.req.session.movements || [];
  }

  /**
   * Retourne toute les opérations qui se trouvent dans la session avec la possibilitée de les filtrer par mois/année
   */
  findManyByDate(month?: number, year?: number): Movement[] {
    return this.req.session.movements?.filter((movement: any) => {
      if ((month !== undefined && dayjs(movement.date).month() !== month) || (year !== undefined && dayjs(movement.date).year() !== year)) {
        return false;
      }

      return true;
    }) || [];
  }

  update(id: number, data: any) {
    const movements = this.req.session.movements || [];
    const movementIndex = movements.findIndex((movement: Movement) => movement.id === id);

    if (movementIndex !== -1) {
      movements[movementIndex] = {
        ...movements[movementIndex],
        ...data,
      }
      return true;
    }

    return false;
  }

  delete(id: number): boolean {
    const movements = this.req.session.movements || []
    const movementIndex = movements.findIndex((movement: any) => movement.id === id);

    if (movementIndex !== -1) {
      movements.splice(movementIndex, 1);
      return true;
    }

    return false;
  }

  /***
   * Retourne le montant total des opérations passées en paramètre
   * 
   */
  getTotalMouvementAmount(movements: Movement[]): number {
    const totalMovementAmount = movements.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.amount
      },
      0
    );

    return totalMovementAmount;
  }

  /**
   * Ajoute une nouvelle opération manuellement
   */
  add(label: string, date: string, amount: number) {
    if (this.req.session.movements && this.req.session.movements.length > 0) {
      this.req.session.movements.push({ date: dayjs(date).format(), amount, checked: false, id: this.req.session.movements?.length, label });
      return true;
    }

    return false;
  }
}

export default MovementService;