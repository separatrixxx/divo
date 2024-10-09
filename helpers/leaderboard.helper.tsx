import axios, { AxiosResponse } from "axios";
import { BaseArguments } from "../interfaces/refactor.interface";
import { setLocale } from "./locale.helper";
import { LeaderboardInterface } from "../interfaces/leaderboard.interface";
import { setLeaderboard, setLeaderboardDefault } from "../features/leaderboard/leaderboardSlice";


export async function getLeaderboard(args: BaseArguments) {
    const { router, dispatch, webApp, tgUser } = args;

    try {
        dispatch(setLeaderboardDefault());

        const { data : response }: AxiosResponse<LeaderboardInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            `/api/leaderboard?user_id=${tgUser?.id}`, 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setLeaderboard(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_leaderboard_error); 

        console.log(err);
    }
}
