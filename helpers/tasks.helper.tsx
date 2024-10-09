import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { CoinsInfoInterface, RefsInterface, UserInterface } from "../interfaces/user.interface";
import { setUser, setUserDefault } from "../features/user/userSlice";
import { BaseArguments } from "../interfaces/refactor.interface";
import { setRefs, setRefsDefault } from "../features/refs/refsSlice";
import { setCoinsInfo, setCoinsInfoDefault } from "../features/coinsInfo/coinsInfoSlice";
import { setTasks, setTasksDefault } from "../features/tasks/tasksSlice";
import { TasksInterface } from "../interfaces/tasks.interface";


export async function getTasks(args: BaseArguments) {
    const { router, dispatch, webApp, tgUser } = args;

    dispatch(setTasksDefault());

    try {
        const { data : response }: AxiosResponse<TasksInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/tasks/get_user_tasks?user_id=' + tgUser?.id, 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setTasks(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_tasks_error, async function() {
            router.push('/');
        }); 

        console.log(err);
    }
}