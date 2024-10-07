import axios, { AxiosResponse } from "axios";
import { BaseArguments } from "../interfaces/refactor.interface";
import { ModelsInterface } from "../interfaces/models.interface";
import { setModels } from "../features/models/modelsSlice";
import { setLocale } from "./locale.helper";


export async function getModels(args: BaseArguments) {
    const { router, dispatch, webApp } = args;

    try {
        const { data : response }: AxiosResponse<ModelsInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/models/?page=1&per_page=100&sort_by=popularity', 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setModels(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(router.locale).errors.get_models_error); 

        console.log(err);
    }
}