import axios, { AxiosResponse } from "axios";
import { BaseArguments, VotingArguments } from "../interfaces/refactor.interface";
import { ModelsInterface, Sort } from "../interfaces/models.interface";
import { setModels, setModelsDefault } from "../features/models/modelsSlice";
import { setLocale } from "./locale.helper";


export async function getModels(sort: Sort, args: BaseArguments) {
    const { router, dispatch, webApp, tgUser } = args;

    try {
        dispatch(setModelsDefault());

        const { data : response }: AxiosResponse<ModelsInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            `/api/models/?page=1&per_page=100&user_id=${tgUser?.id}&sort_by=${sort}`, 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setModels(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_models_error); 

        console.log(err);
    }
}

export async function voteForModel(args: VotingArguments) {
    const { router, webApp, tgUser, modelId, handleClick, setIsLoading, setIsVoted } = args;

    setIsLoading(true);

    try {
        await axios.post(
            `${process.env.NEXT_PUBLIC_DOMAIN}/api/model/vote?user_id=${tgUser?.id}&model_id=${modelId}`, {},
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            }
        ).then(() => {
                setIsLoading(false);
                setIsVoted(true);
                handleClick();
            });
    } catch (err: any) {
        setIsLoading(false);
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.voting_error); 

        console.log(err);
    }
}
