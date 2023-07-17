import dayjs from "dayjs";
import { Request } from "express";
import { Balance } from "../../types/Balance";

class BalanceService {
  req: Request<{}, any, any, any, Record<string, any>>;

  constructor(req: Request<{}, any, any, any, Record<string, any>>) {
    this.req = req;
  }

  /**
   * Retrouve le relevé de compte dans la session depuis son id
   */
  findOne(id: number): Balance | undefined {
    return this.req.session.balances?.find((balance: any) => balance.id === id);
  }

  /**
   * Retourne tous les relevés de compte qui se trouvent dans la session
   */
  findMany(): Balance[] {
    return this.req.session.balances || [];
  }

  
  /**
   * Retourne tous les relevés de compte qui se trouvent dans la session avec la possibilitée de les filtrer par mois/année
   */
  findManyByDate(month?: number, year?: number): Balance[] {
    return this.req.session.balances?.filter((balance: any) => {
      if ((month !== undefined && dayjs(balance.date).month() !== month) || (year !== undefined && dayjs(balance.date).year() !== year)) {
        return false;
      }

      return true;
    }) || [];
  }

  /**
   * Retourne le dernier solde
   */
  getLastBalanceAmount(balances: any[]): number {
    return balances[balances.length - 1].balance;
  }
}

export default BalanceService;