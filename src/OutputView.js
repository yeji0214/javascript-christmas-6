import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';

const OutputView = {
    displayGreeting() {
        Console.print(MESSAGES.INFO.GREETING);
    }

    // printMenu() {
    //     Console.print("<주문 메뉴>");
    //     // ...
    // }
    // ...
}

export default OutputView;