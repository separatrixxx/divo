import axios from "axios";
import { setLocale } from "./locale.helper";
import { setUser, setUserDefault } from "../features/user/userSlice";
import { BaseArguments } from "../interfaces/refactor.interface";
import { setRefs, setRefsDefault } from "../features/refs/refsSlice";
import { setCoinsInfo, setCoinsInfoDefault } from "../features/coinsInfo/coinsInfoSlice";


export async function getUser(args: BaseArguments) {
    const { router, dispatch, webApp, tgUser } = args;

    try {
        dispatch(setUserDefault());

        const { data: response } = await axios.get('/api/getUser', {
            params: {
                user_id: tgUser?.id,
            },
        });

        dispatch(setUser(response));
    } catch (err: any) {
        if (err.response && err.response.status === 404) {
            webApp?.showAlert(setLocale(tgUser?.language_code).errors.user_not_found_error, async function () {
                webApp.openLink('https://t.me/divo_fashion_bot')
                webApp.close();
            });
        } else {
            webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_user_error, async function () {
                router.push('/');
            });
        }

        console.error(err);
    }
}

export async function getRefs(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        dispatch(setRefsDefault());

        const { data: response } = await axios.get('/api/getRefs', {
            params: {
                user_id: tgUser?.id,
            },
        });

        dispatch(setRefs(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_friends_error);

        console.error(err);
    }
}

export async function getCoinsInfo(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        dispatch(setCoinsInfoDefault());

        const { data: response } = await axios.get('/api/getCoinsInfo', {
            params: {
                user_id: tgUser?.id,
            },
        });

        dispatch(setCoinsInfo(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_coins_info_error);
        console.error(err);
    }
}
