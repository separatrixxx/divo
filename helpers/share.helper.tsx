import { IWebApp } from "../types/telegram";


export function shareLink (link: string, message: string, webApp: IWebApp | undefined) {
    const telegramUrl = `https://t.me/share/url?url=${link}&text=${message}`;

    webApp?.openLink(telegramUrl);
}
