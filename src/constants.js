export const MESSAGES = {
    INFO: {
        GREETING: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n',
        DATE_PROMPT: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
        MENU_PROMPT: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
    },
    ERROR: {
        INVALID_DATE: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n',
        INVALID_MENU: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n',
        EXCEED_MAXIMUN_QUANTITY: '[ERROR] 주문은 최대 20개까지만 가능합니다.\n',
        ONLY_DRINK: '[ERROR] 음료만 주문할 수 없습니다.\n',
    }
};