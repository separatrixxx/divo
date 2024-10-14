import axios from "axios";
import { setLocale } from "./locale.helper";
import { BaseArguments, CheckTaskArguments } from "../interfaces/refactor.interface";
import { setTasks, setTasksDefault } from "../features/tasks/tasksSlice";
import { ToastSuccess, ToastError } from "../components/Common/Toast/Toast";


export async function getTasks(args: BaseArguments) {
    const { router, dispatch, webApp, tgUser } = args;

    try {
        dispatch(setTasksDefault());

        const { data: response } = await axios.get('/api/getTasks', {
            params: {
                user_id: tgUser?.id,
            },
        });

        dispatch(setTasks(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_tasks_error, async function () {
            router.push('/');
        });
        console.error(err);
    }
}

export async function checkTasks(args: CheckTaskArguments) {
    const { router, dispatch, webApp, tgUser, taskId, taskUrl, setIsLoading } = args;

    setIsLoading(true);

    try {
        const { data: response } = await axios.get('/api/checkTasks', {
            params: {
                user_id: tgUser?.id,
                task_id: taskId,
            },
        });

        if (response.result.tasks_status.status === 'pending' || response.result.tasks_status.status === 'error') {           
            if (taskUrl) {
                webApp?.openLink(taskUrl);
            } else {
                ToastError(setLocale(tgUser?.language_code).errors.have_not_completed_task_error);
            }
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
        console.error(err);
    }
}
