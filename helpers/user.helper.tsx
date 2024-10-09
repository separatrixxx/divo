import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { UserInterface } from "../interfaces/user.interface";
import { setUser, setUserDefault } from "../features/user/userSlice";
import { BaseArguments } from "../interfaces/refactor.interface";


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
                router.push('/');
            }); 
        } else {
            webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_user_error, async function() {
                router.push('/');
            }); 
        }

        console.log(err);
    }
}