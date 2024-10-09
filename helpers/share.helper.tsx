export function shareLink (link: string, message: string, router: any) {
    const telegramUrl = `https://t.me/share/url?url=${link}&text=${message}`;

    router.push(telegramUrl);
}
