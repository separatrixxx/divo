import axios from "axios";
import { BaseArguments, VotingArguments } from "../interfaces/refactor.interface";
import { setModels, setModelsDefault } from "../features/models/modelsSlice";
import { setLocale } from "./locale.helper";


export async function getModels(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        dispatch(setModelsDefault());

        const { data: response } = await axios.get('/api/getModels', {
            params: {
                user_id: tgUser?.id,
            },
        });

        dispatch(setModels(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_models_error);
        console.error(err);
    }
}

export async function voteForModel(args: VotingArguments) {
    const { webApp, tgUser, modelId, setIsLoading, setIsVoted, setAward, setRaffleVisible, handleClick } = args;

    setIsLoading(true);

    try {
        const { data: response } = await axios.post('/api/voteForModel', null, {
            params: {
                user_id: tgUser?.id,
                model_id: modelId,
            },
        });

        setIsLoading(false);
        setIsVoted(true);
        setRaffleVisible(true);
        handleClick();
        setAward(response.result.coins_awarded);
    } catch (err: any) {
        setIsLoading(false);
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.voting_error);
        console.error(err);
    }
}
