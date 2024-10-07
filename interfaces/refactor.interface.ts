import { IWebApp } from "../types/telegram";


export interface ErrorArguments {
    webApp: IWebApp | undefined,
    router: any,
}

export interface BaseArguments extends ErrorArguments {
    dispatch: any,
}
