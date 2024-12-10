import { getPresent } from "./Promotion.js";

class Badge {
    #badge;

    constructor(benefit) {
        this.#badge = this.#calculate(benefit);
    }

    #calculate(benefit) {
        if (getPresent() !== '없음') benefit += 25000;
        if (benefit >= 20000) return '산타';
        if (benefit >= 10000) return '트리';
        if (benefit >= 5000) return '별';
        return '없음';
    }
    
    getBadge() {
        return this.#badge;
    }
}

export default Badge;