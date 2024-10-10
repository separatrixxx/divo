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
    setIsLoading: (e: boolean) => void,
    setIsVoted: (e: boolean) => void,
    setPotentialReward: (e: number) => void,
    setAward: (e: number) => void,
    handleClick: () => void,
}
