export function copyToClipboard(id: string) {
    navigator.clipboard.writeText(id).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
