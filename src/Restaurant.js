import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import OutputView from './OutputView.js';
import InputView from './InputView.js';
import { TotalOrderAmount } from './Calculator.js';
import { apply } from './Promotion.js';

export const enter = async () => {
    OutputView.displayGreeting();
    const date = await InputView.getVisitDate();
    const orderedMenu = await InputView.getOrderedMenu();
    const totalOrderAmount = TotalOrderAmount(orderedMenu);
    if (totalOrderAmount >= 10000) Console.print(apply(date, orderedMenu, totalOrderAmount));
}