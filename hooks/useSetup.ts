import { useTelegram } from '../layout/TelegramProvider';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../features/store/store';
import { useRouter } from 'next/router';


export const useSetup = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { webApp, tgUser } = useTelegram();

    const user = useSelector((state: AppState) => state.user.user);
    const models = useSelector((state: AppState) => state.models.models);
    const sort = useSelector((state: AppState) => state.sort.sort);
    const leaderboard = useSelector((state: AppState) => state.leaderboard.leaderboard);
    const refs = useSelector((state: AppState) => state.refs.refs);
    const coinsInfo = useSelector((state: AppState) => state.coinsInfo.coinsInfo);
    const tasks = useSelector((state: AppState) => state.tasks.tasks);
    const divosit = useSelector((state: AppState) => state.divosit.divosit);

    return {
        router,
        dispatch,
        webApp,
        tgUser,
        user,
        models,
        sort,
        leaderboard,
        refs,
        coinsInfo,
        tasks,
        divosit,
    };
};
