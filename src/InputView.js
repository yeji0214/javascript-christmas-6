import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from "./constants.js";
import VisitDate from "./VisitDate.js";

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
    }
}

export default InputView;