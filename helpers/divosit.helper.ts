import axios from "axios";
import { BaseArguments, StakingArguments } from "../interfaces/refactor.interface";
import { setLocale } from "./locale.helper";
import { setDivositActive, setDivositCompleted, setDivositDefault } from "../features/divosit/divositSlice";
import { ToastSuccess } from "../components/Common/Toast/Toast";


export function calculateProfit(coins: number, days: number): string {
    if (isNaN(coins) || coins <= 0) return '0.00';

    let dailyRate: number;
    if (days >= 1 && days < 7) {
        dailyRate = 0.005;
    } else if (days >= 7 && days < 30) {
        dailyRate = 0.007;
    } else if (days >= 30) {
        dailyRate = 0.01;
    } else {
        dailyRate = 0;
    }

    const A = coins * Math.pow((1 + dailyRate), days);
    const profit = A - coins;

    return profit.toFixed();
};

export async function addStaking(args: StakingArguments) {
    const { router, dispatch, webApp, tgUser, amount, duration, setStakeCoins, setIsLoading } = args;

    setIsLoading(true);

    try {
        await axios.post('/api/addStaking', null, {
            params: {
                user_id: tgUser?.id,
                amount: amount,
                duration_days: duration,
            },
        }).then(() => {
            setIsLoading(false);
            setStakeCoins((prev: number) => prev + amount);        

            getDivosit({
                router: router,
                webApp: webApp,
                dispatch: dispatch,
                tgUser: tgUser,
            });

            ToastSuccess(setLocale(tgUser?.language_code).you_put_coins_on_divo_boost
                .replace('$$$', String(amount))
                .replace('$$$$', calculateProfit(amount, duration))
            );
        });
    } catch (err: any) {
        setIsLoading(false);
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.add_staking_error);
        console.error(err);
    }
}

export async function getDivosit(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        dispatch(setDivositDefault());

        const { data: responseActive } = await axios.get('/api/getActiveDivosit', {
            params: {
                user_id: tgUser?.id,
            },
        });

        const { data: responseCompleted } = await axios.get('/api/getCompletedDivosit', {
            params: {
                user_id: tgUser?.id,
            },
        });

        dispatch(setDivositActive(responseActive));
        dispatch(setDivositCompleted(responseCompleted));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_divosit_error);
        console.error(err);
    }
}
