import VisitDate from "../src/VisitDate";
import { MESSAGES } from "../src/constants";

describe("방문 날짜 테스트", () => {

    test("숫자가 아니면 예외가 발생한다.", () => {
        ['eee', 'three'].forEach((date) => {
            expect(() => {
                new VisitDate(date);
            }).toThrow(MESSAGES.ERROR.INVALID_DATE);
        });
    });

    test("정수지만 1과 31 사이가 아니라면 예외가 발생한다.", () => {
        [0, 32].forEach((date) => {
            expect(() => {
                new VisitDate(date);
            }).toThrow(MESSAGES.ERROR.INVALID_DATE);
        });
    });

    test("소수점 아래가 0이 아닌 실수라면 예외가 발생한다.", () => {
        [1.1, 30.5].forEach((date) => {
            expect(() => {
                new VisitDate(date);
            }).toThrow(MESSAGES.ERROR.INVALID_DATE);
        });
    });


    test("올바른 날짜가 입력되면 객체가 정상 생성된다.", () => {
        [1, 5, 31].forEach((date) => {
            expect(() => {
                new VisitDate(date);
            }).not.toThrow();
        });
    });

    test("실수지만 소수점 아래가 0이라면 객체가 정상 생성된다.", () => {
        [1.0, 31.0].forEach((date) => {
            expect(() => {
                new VisitDate(date);
            }).not.toThrow();
        });
    });
});