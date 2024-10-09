export function numFormat(num: number): string {
    if (num >= 1000 && num < 1000000) {
        return Math.round(num / 1000).toFixed(1) + 'k';
    } else if (num >= 1000000) {
        return Math.round(num / 1000000).toFixed(1) + 'M';
    }

    return String(num);
}
