import Menu from "../src/Menu";
import { MESSAGES } from "../src/constants";

describe("메뉴 테스트", () => {

    test("메뉴 형식이 예시와 다르면 예외가 발생한다.", () => {
        ['제로콜라2', '제로콜라-2초코케이크-1', '초코케이크-1,시저샐러드2'].forEach((menu) => {
            expect(() => {
                new Menu(menu);
            }).toThrow(MESSAGES.ERROR.INVALID_MENU);
        });
    });

    test("메뉴판에 없는 메뉴를 입력하면 예외가 발생한다.", () => {
        ['고바순-3', '타코야키-10,그릭요거트-1'].forEach((menu) => {
            expect(() => {
                new Menu(menu);
            }).toThrow(MESSAGES.ERROR.INVALID_MENU);
        });
    });

    test("수량이 숫자가 아니라면 예외가 발생한다.", () => {
        ['제로콜라-두개', '초코케이크-1,시저샐러드-*'].forEach((menu) => {
            expect(() => {
                new Menu(menu);
            }).toThrow(MESSAGES.ERROR.INVALID_MENU);
        });
    });

    test("수량이 0이라면 예외가 발생한다.", () => {
        ['제로콜라-0', '초코케이크-1,시저샐러드-0'].forEach((menu) => {
            expect(() => {
                new Menu(menu);
            }).toThrow(MESSAGES.ERROR.INVALID_MENU);
        });
    });

    test("중복 메뉴를 입력하면 예외가 발생한다.", () => {
        ['제로콜라-1, 제로콜라-3', '초코케이크-1,시저샐러드-1,초코케이크-1'].forEach((menu) => {
            expect(() => {
                new Menu(menu);
            }).toThrow(MESSAGES.ERROR.INVALID_MENU);
        });
    });

    test("전체 수량이 20개를 초과하면 예외가 발생한다.", () => {
        ['제로콜라-21', '초코케이크-10,시저샐러드-11'].forEach((menu) => {
            expect(() => {
                new Menu(menu);
            }).toThrow(MESSAGES.ERROR.EXCEED_MAXIMUN_QUANTITY);
        });
    });

    test("음료만 주문하면 예외가 발생한다.", () => {
        ['제로콜라-11', '샴페인-1,레드와인-3'].forEach((menu) => {
            expect(() => {
                new Menu(menu);
            }).toThrow(MESSAGES.ERROR.ONLY_DRINK);
        });
    });


    test("올바른 메뉴가 입력되면 객체가 정상 생성된다.", () => {
        ['타파스-1,제로콜라-1', '시저샐러드-2,레드와인-1,양송이수프-10'].forEach((menu) => {
            expect(() => {
                new Menu(menu);
            }).not.toThrow();
        });
    });

    test("수량 경계값 검사 - 객체가 정상 생성된다.", () => {
        ['타파스-20', '시저샐러드-10,레드와인-5,양송이수프-5', '양송이수프-1'].forEach((menu) => {
            expect(() => {
                new Menu(menu);
            }).not.toThrow();
        });
    });
});