import { MESSAGES } from "./constants.js";

class Menu {
    #orderdMenu; // 메뉴명: {'category': , 'cnt': , 'price': }
    #menuInfo = { '애피타이저': { '양송이수프': 6000, '타파스': 5500, '시저샐러드': 8000 }, '메인': { '티본스테이크': 55000, '바비큐립': 54000, '해산물파스타': 35000, '크리스마스파스타': 25000 }, '디저트': { '초코케이크': 15000, '아이스크림': 5000 }, '음료': { '제로콜라': 3000, '레드와인': 60000, '샴페인': 25000 } };
    #wholeMenuName = [].concat(Object.keys(this.#menuInfo.애피타이저), Object.keys(this.#menuInfo.메인), Object.keys(this.#menuInfo.디저트), Object.keys(this.#menuInfo.음료));

    constructor(orderedMenu) {
        this.#orderdMenu = this.#validate(orderedMenu.split(',').map((item) => item.split('-')));
    }

    #validate(orderedMenu) {
        let tempOrderedMenu = {};
        let wholeCnt = 0;
        let notDrink = 0;

        orderedMenu.forEach((menu) => {
            if (menu.length !== 2) throw new Error(MESSAGES.ERROR.INVALID_MENU);
            const name = menu[0].trim();
            const cnt = Number(menu[1]);

            if (isNaN(cnt) || !Number.isInteger(cnt) || cnt === 0) throw new Error(MESSAGES.ERROR.INVALID_MENU);
            if (!this.#wholeMenuName.includes(name)) throw new Error(MESSAGES.ERROR.INVALID_MENU);

            // 카테고리와 가격 찾기
            let category, price;
            for (const [key, items] of Object.entries(this.#menuInfo)) {
                if (Object.keys(items).includes(name)) {
                    category = key;
                    price = items[name];
                    break;
                }
            }

            if (Object.keys(tempOrderedMenu).includes(name)) throw new Error(MESSAGES.ERROR.INVALID_MENU);
            tempOrderedMenu[name] = { 'category': category, 'cnt': cnt, 'price': price };
            if (category !== '음료') notDrink++;
            wholeCnt += cnt;
        });

        if (wholeCnt > 20) throw new Error(MESSAGES.ERROR.EXCEED_MAXIMUN_QUANTITY);
        if (notDrink === 0) throw new Error(MESSAGES.ERROR.ONLY_DRINK);

        return tempOrderedMenu;
    }

    getOrderedMenu() {
        return this.#orderdMenu;
    }
}

export default Menu;