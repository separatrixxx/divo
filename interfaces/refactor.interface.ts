import { IWebApp, ITelegramUser } from "../types/telegram";


export interface ErrorArguments {
    webApp: IWebApp | undefined,
    router: any,
}

export interface BaseArguments extends ErrorArguments {
    dispatch: any,
}

export interface GetUserArguments extends BaseArguments {
    tgUser: ITelegramUser | undefined,
}
