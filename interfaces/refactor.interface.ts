import { IWebApp, ITelegramUser } from "../types/telegram";


export interface ErrorArguments {
    router: any,
    webApp: IWebApp | undefined,
}

export interface BaseArguments extends ErrorArguments {
    tgUser: ITelegramUser | undefined,
    dispatch: any,
}

export interface VotingArguments extends Omit<BaseArguments, 'dispatch'> {
    modelId: string,
    handleClick: () => void,
    setIsLoading: (e: boolean) => void,
    setIsVoted: (e: boolean) => void,
}
