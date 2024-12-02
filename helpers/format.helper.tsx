import { format } from "date-fns";


export function numFormat(num: number): string {
    if (num >= 1000 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'k';
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }

    return String(num);
}

export function formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export function formatTimestamp(timestamp: number): string {
    return format(new Date(timestamp * 1000), 'dd.MM.yyyy');
}

