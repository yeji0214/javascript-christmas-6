import { MESSAGES } from "./constants.js";

class VisitDate {
    #date;

    constructor(date) {
        this.#date = this.#validate(Number(date));
    }

    #validate(date) {
        if (isNaN(date) || date < 1 || date > 31 || !Number.isInteger(date)) throw new Error(MESSAGES.ERROR.INVALID_DATE);

        return date;
    }

    getDate() {
        return this.#date;
    }
}

export default VisitDate;