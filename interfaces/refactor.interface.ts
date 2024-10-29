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
    setAward: (e: number) => void,
    setRaffleVisible: (e: boolean) => void,
    handleClick: () => void,
}

export interface CheckTaskArguments extends BaseArguments {
    taskId: string,
    taskUrl?: string,
    setIsLoading: (e: boolean) => void,
}

export interface StakingArguments extends BaseArguments {
    amount: number,
    duration: number,
    setStakeCoins: (e: any) => void,
    setIsLoading: (e: boolean) => void,
}
