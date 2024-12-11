import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import { PaymentAmount } from './Calculator.js';
import { getPresent } from './Promotion.js';

const OutputView = {
    displayGreeting() {
        Console.print(MESSAGES.INFO.GREETING);
    },

    displayReceipt(date, orderedMenu, totalOrderAmount, appliedPromotion, totalBenefitAmount, badge) {
        Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n\n`);

        OutputView.displayOrderedMenu(orderedMenu);
        OutputView.displayTotalOrderAmount(totalOrderAmount);
        const present = getPresent();
        OutputView.displayPresent(present);
        OutputView.displayBenefits(appliedPromotion, present);
        OutputView.displayTotalBenefitAmount(totalBenefitAmount, present);
        OutputView.displayPaymentAmount(PaymentAmount(totalOrderAmount, totalBenefitAmount));
        OutputView.displayBadge(badge);
    },

    displayOrderedMenu(orderedMenu) {
        Console.print('<주문 메뉴>\n');
        for (const [key, info] of Object.entries(orderedMenu)) {
            Console.print(`${key} ${info['cnt']}개\n`);
        }
        Console.print('\n');
    },

    displayTotalOrderAmount(totalOrderAmount) {
        Console.print('<할인 전 총주문 금액>\n');
        Console.print(`${totalOrderAmount.toLocaleString()}원\n`);
        Console.print('\n');
    },

    displayPresent(present) {
        Console.print('<증정 메뉴>\n');
        Console.print(`${present}\n`);
        Console.print('\n');
    },

    displayBenefits(appliedPromotion, present) {
        Console.print('<혜택 내역>\n');
        if (Object.keys(appliedPromotion).length === 0) Console.print('없음\n');
        else {
            for (const [name, benefit] of Object.entries(appliedPromotion)) {
                if (benefit > 0) Console.print(`${name}: -${benefit.toLocaleString()}원\n`);
            }
        }
        if (present !== '없음') Console.print('증정 이벤트: -25,000원\n');
        Console.print('\n');
    },

    displayTotalBenefitAmount(totalBenefitAmount, present) {
        Console.print('<총혜택 금액>\n');
        if (present !== '없음') totalBenefitAmount += 25000;
        if (totalBenefitAmount === 0) Console.print('0원\n');
        else Console.print(`-${totalBenefitAmount.toLocaleString()}원\n`);
        Console.print('\n');
    },

    displayPaymentAmount(PaymentAmount) {
        Console.print('<할인 후 예상 결제 금액>\n');
        Console.print(`${PaymentAmount.toLocaleString()}원\n`);
        Console.print('\n');
    },

    displayBadge(badge) {
        Console.print('<12월 이벤트 배지>\n');
        Console.print(`${badge}\n`);
    }
}

export default OutputView;