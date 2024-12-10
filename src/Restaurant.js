import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import OutputView from './OutputView.js';
import InputView from './InputView.js';

export const enter = async () => {
    OutputView.displayGreeting();
    await InputView.getVisitDate();
    await InputView.getOrderedMenu();
}