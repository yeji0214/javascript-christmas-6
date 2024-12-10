import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import OutputView from './OutputView.js';

export const enter = async () => {
    OutputView.displayGreeting();
}