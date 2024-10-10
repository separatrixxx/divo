import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { CoinsInfoInterface, RefsInterface, UserInterface } from "../interfaces/user.interface";
import { setUser, setUserDefault } from "../features/user/userSlice";
import { BaseArguments } from "../interfaces/refactor.interface";
import { setRefs, setRefsDefault } from "../features/refs/refsSlice";
import { setCoinsInfo, setCoinsInfoDefault } from "../features/coinsInfo/coinsInfoSlice";


export async function getUser(args: BaseArguments) {
    const { router, dispatch, webApp, tgUser } = args;

    dispatch(setUserDefault());

    try {
        const { data : response }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/users/user_data?user_id=' + tgUser?.id, 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setUser(response));
    } catch (err: any) {
        if (err.response && err.response.data.error_message === 'User not found') {
            webApp?.showAlert(setLocale(tgUser?.language_code).errors.user_not_found_error, async function() {
                webApp.close();
            }); 
        } else {
            webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_user_error, async function() {
                router.push('/');
            }); 
        }

        console.log(err);
    }
}

export async function getRefs(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    dispatch(setRefsDefault());

    try {
        const { data : response }: AxiosResponse<RefsInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/users/referral_info?user_id=' + tgUser?.id, 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setRefs(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_refs_error); 

        console.log(err);
    }
}


export async function getCoinsInfo(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    dispatch(setCoinsInfoDefault());

    try {
        const { data : response }: AxiosResponse<CoinsInfoInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/users/coins_logs?user_id=' + tgUser?.id, 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setCoinsInfo(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_coins_info_error); 

        console.log(err);
    }
}
