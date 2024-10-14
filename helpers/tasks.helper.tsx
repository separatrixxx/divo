import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { BaseArguments, CheckTaskArguments } from "../interfaces/refactor.interface";
import { setTasks, setTasksDefault } from "../features/tasks/tasksSlice";
import { CheckTaskInterface, TasksInterface } from "../interfaces/tasks.interface";
import { ToastSuccess, ToastError } from "../components/Common/Toast/Toast";


export async function getTasks(args: BaseArguments) {
    const { router, dispatch, webApp, tgUser } = args;

    try {
        dispatch(setTasksDefault());

        const { data: response }: AxiosResponse<TasksInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/tasks/get_user_tasks?user_id=' + tgUser?.id,
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setTasks(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_tasks_error, async function () {
            router.push('/');
        });

        console.log(err);
    }
}

export async function checkTasks(args: CheckTaskArguments) {
    const { router, dispatch, webApp, tgUser, taskId, setIsLoading } = args;

    setIsLoading(true);

    try {
        const { data: response }: AxiosResponse<CheckTaskInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            `/api/tasks/check_tasks?user_id=${tgUser?.id}&task_id=${taskId}`,
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        if (response.result.tasks_status.status === 'pending'
            || response.result.tasks_status.status === 'error') {
            ToastError(setLocale(tgUser?.language_code).errors.have_not_completed_task_error);
        } else {
            ToastSuccess(setLocale(tgUser?.language_code).task_completed);

            getTasks({
                router: router,
                webApp: webApp,
                dispatch: dispatch,
                tgUser: tgUser,
            });
        }

        setIsLoading(false);
    } catch (err: any) {
        setIsLoading(false);

        webApp?.showAlert(setLocale(tgUser?.language_code).errors.check_task_error);

        console.log(err);
    }
}