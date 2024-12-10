import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';

const OutputView = {
    displayGreeting() {
        Console.print(MESSAGES.INFO.GREETING);
    }
}

export default OutputView;