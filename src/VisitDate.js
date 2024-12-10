class VisitDate {
    #date;

    constructor(date) {
        this.#date = this.#validate(Number(date));
    }

    #validate(date) {
        if (isNaN(date) || date < 1 || date > 31 || !Number.isInteger(date)) throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');

        return date;
    }

    getDate() {
        return this.#date;
    }
}

export default VisitDate;