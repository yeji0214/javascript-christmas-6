export const TotalOrderAmount = (orderedMenu) => {
    let total = 0;
    for (const [key, info] of Object.entries(orderedMenu)) {
        total += info['cnt'] * info['price'];
    }
    return total;
}

export const TotalBenefitAmount = (appliedPromotion) => {
    let total = 0;
    for (const [name, benefit] of Object.entries(appliedPromotion)) {
        if (!isNaN(Number(benefit))) total += benefit;
    }
    return total;
}

export const PaymentAmount = (totalOrderAmount, totalBenefitAmount) => {
    return totalOrderAmount - totalBenefitAmount;
}