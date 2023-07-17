import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { Movement } from '../../types/Movement';
import { Balance } from '../../types/Balance';

export const movements: Movement[] = []
export const balances: Balance[] = [];

const addToBalances = (
  date: string,
  balance: number
) => {
  console.log(balance)
  balances.push({
    id: balances.length,
    date,
    balance,
  });
}

const addToMovements = (
  date: string,
  amount: number
) => {
  movements.push({
    id: movements.length,
    label: faker.lorem.text(),
    date,
    amount,
    checked: false,
  });
}

// Soldes de Janvier
addToBalances(dayjs("01/01/2023").format(), 2000);
addToBalances(dayjs("01/02/2023").format(), 2000);
addToBalances(dayjs("01/03/2023").format(), 2000);
addToBalances(dayjs("01/04/2023").format(), 2000);
addToBalances(dayjs("01/05/2023").format(), 2000);
addToBalances(dayjs("01/06/2023").format(), 2000);
addToBalances(dayjs("01/07/2023").format(), 2000);
addToBalances(dayjs("01/08/2023").format(), 2000);
addToBalances(dayjs("01/09/2023").format(), 2000);
addToBalances(dayjs("01/10/2023").format(), 2000);
addToBalances(dayjs("01/11/2023").format(), 2000);
addToBalances(dayjs("01/12/2023").format(), 2000);
addToBalances(dayjs("01/13/2023").format(), 2000);
addToBalances(dayjs("01/14/2023").format(), 2000);
addToBalances(dayjs("01/15/2023").format(), 1500);
addToBalances(dayjs("01/16/2023").format(), 1000);
addToBalances(dayjs("01/17/2023").format(), 1000);
addToBalances(dayjs("01/18/2023").format(), 1000);
addToBalances(dayjs("01/19/2023").format(), 1000);
addToBalances(dayjs("01/20/2023").format(), 1000);
addToBalances(dayjs("01/21/2023").format(), 1000);
addToBalances(dayjs("01/22/2023").format(), 500);
addToBalances(dayjs("01/23/2023").format(), 500);
addToBalances(dayjs("01/24/2023").format(), 600);
addToBalances(dayjs("01/25/2023").format(), 400);
addToBalances(dayjs("01/26/2023").format(), 400);
addToBalances(dayjs("01/27/2023").format(), 400);
addToBalances(dayjs("01/28/2023").format(), 200);
addToBalances(dayjs("01/29/2023").format(), -50);
addToBalances(dayjs("01/30/2023").format(), -30);
addToBalances(dayjs("01/31/2023").format(), -100);

// Operations banquaires de Janvier
addToMovements(dayjs("01/01/2023").format(), 2000);
addToMovements(dayjs("01/15/2023").format(), -500);
addToMovements(dayjs("01/16/2023").format(), -500);
addToMovements(dayjs("01/22/2023").format(), -500);
addToMovements(dayjs("01/24/2023").format(), 100);
addToMovements(dayjs("01/25/2023").format(), -200);

// Soldes de Fevrier
addToBalances(dayjs("02/01/2023").format(), 2000);
addToBalances(dayjs("02/02/2023").format(), 2000);
addToBalances(dayjs("02/03/2023").format(), 2000);
addToBalances(dayjs("02/04/2023").format(), 2000);
addToBalances(dayjs("02/05/2023").format(), 1800);
addToBalances(dayjs("02/06/2023").format(), 2000);
addToBalances(dayjs("02/07/2023").format(), 2000);
addToBalances(dayjs("02/08/2023").format(), 2000);
addToBalances(dayjs("02/09/2023").format(), 2000);
addToBalances(dayjs("02/10/2023").format(), 2000);
addToBalances(dayjs("02/11/2023").format(), 2000);
addToBalances(dayjs("02/12/2023").format(), 2000);
addToBalances(dayjs("02/13/2023").format(), 2000);
addToBalances(dayjs("02/14/2023").format(), 2000);
addToBalances(dayjs("02/15/2023").format(), 1300);
addToBalances(dayjs("02/16/2023").format(), 800);
addToBalances(dayjs("02/17/2023").format(), 1000);
addToBalances(dayjs("02/18/2023").format(), 1000);
addToBalances(dayjs("02/19/2023").format(), 1000);
addToBalances(dayjs("02/20/2023").format(), 1000);
addToBalances(dayjs("02/21/2023").format(), 1000);
addToBalances(dayjs("02/22/2023").format(), 300);
addToBalances(dayjs("02/23/2023").format(), 300);
addToBalances(dayjs("02/24/2023").format(), 300);
addToBalances(dayjs("02/25/2023").format(), 300);
addToBalances(dayjs("02/26/2023").format(), 300);
addToBalances(dayjs("02/27/2023").format(), 300);
addToBalances(dayjs("02/28/2023").format(), -50);

// Operations banquaires de Fevrier
addToMovements(dayjs("02/01/2023").format(), 2000);
addToMovements(dayjs("02/05/2023").format(), -100);
addToMovements(dayjs("02/05/2023").format(), -100);
addToMovements(dayjs("02/15/2023").format(), -500);
addToMovements(dayjs("02/16/2023").format(), -500);
addToMovements(dayjs("02/22/2023").format(), -500);
addToMovements(dayjs("02/28/2023").format(), -350);
