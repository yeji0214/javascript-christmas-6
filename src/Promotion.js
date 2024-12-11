let appliedPromotion = {};
let present = '없음';
const weekendDates = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
const specialDates = [3, 10, 17, 24, 31];

export const apply = (date, orderedMenu, totalOrderAmount) => {
    if (totalOrderAmount >= 10000) {
        if (date >= 1 && date <= 25) christmasDDay(date);
        if (!weekendDates.includes(date)) weekday(orderedMenu);
        else weekend(orderedMenu);
        if (specialDates.includes(date)) special();
        if (totalOrderAmount >= 120000) present = '샴페인 1개';
    }

    return appliedPromotion;
}

export const christmasDDay = (date) => {
    appliedPromotion['크리스마스 디데이 할인'] = 1000 + (date - 1) * 100;
}

export const weekday = (orderedMenu) => {
    let cnt = 0;
    for (const [key, info] of Object.entries(orderedMenu)) {
        if (info['category'] === '디저트') cnt += info['cnt'];
    }
    appliedPromotion['평일 할인'] = 2023 * cnt;
}

export const weekend = (orderedMenu) => {
    let cnt = 0;
    for (const [key, info] of Object.entries(orderedMenu)) {
        if (info['category'] === '메인') cnt += 1
    }
    appliedPromotion['주말 할인'] = 2023 * cnt;
}

export const special = () => {
    appliedPromotion['특별 할인'] = 1000;
}

export const getPresent = () => {
    return present;
}