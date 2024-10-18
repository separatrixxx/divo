export function numFormat(num: number): string {
    if (num >= 1000 && num < 1000000) {
        return Math.round(num / 1000).toFixed(1) + 'k';
    } else if (num >= 1000000) {
        return Math.round(num / 1000000).toFixed(1) + 'M';
    }

    return String(num);
}

export function formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
