export const TotalOrderAmount = (orderedMenu) => {
    let total = 0;
    for (const [key, info] of Object.entries(orderedMenu)) {
        total += info['cnt'] * info['price'];
    }
    return total;
}