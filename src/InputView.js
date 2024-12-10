import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from "./constants.js";
import VisitDate from "./VisitDate.js";
import Menu from './Menu.js';

const InputView = {
    async getVisitDate() {
        while (true) {
            const date = await Console.readLineAsync(MESSAGES.INFO.DATE_PROMPT);

            try { 
                return new VisitDate(date).getDate();
            } catch (error) {
                Console.print(error.message);
            }
        }
    },

    async getOrderedMenu() {
        while (true) {
            const menu = await Console.readLineAsync(MESSAGES.INFO.MENU_PROMPT);

            try { 
                return new Menu(menu).getOrderedMenu();
            } catch (error) {
                Console.print(error.message);
            }
        }
    }
}

export default InputView;