import axios from "axios";
import { BaseArguments } from "../interfaces/refactor.interface";
import { setLocale } from "./locale.helper";
import { setLeaderboard, setLeaderboardDefault } from "../features/leaderboard/leaderboardSlice";


export async function getLeaderboard(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        dispatch(setLeaderboardDefault());

        const { data: response } = await axios.get('/api/getLeaderboard', {
            params: {
                user_id: tgUser?.id,
            },
        });

        dispatch(setLeaderboard(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_leaderboard_error);
        console.error(err);
    }
}
