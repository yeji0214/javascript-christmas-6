import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import OutputView from './OutputView.js';
import InputView from './InputView.js';
import { TotalOrderAmount, TotalBenefitAmount } from './Calculator.js';
import { apply } from './Promotion.js';
import Badge from './Badge.js';

export const enter = async () => {
    OutputView.displayGreeting();
    const date = await InputView.getVisitDate();
    const orderedMenu = await InputView.getOrderedMenu();
    const totalOrderAmount = TotalOrderAmount(orderedMenu);
    const appliedPromotion = apply(date, orderedMenu, totalOrderAmount);
    const totalBenefitAmount = TotalBenefitAmount(appliedPromotion);
    const badge = new Badge(totalBenefitAmount).getBadge();
    OutputView.displayReceipt(date, orderedMenu, totalOrderAmount, appliedPromotion, totalBenefitAmount, badge);
}