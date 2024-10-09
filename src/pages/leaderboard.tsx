import { LeaderboardPage } from '../../page_components/LeaderboardPage/LeaderboardPage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { useEffect } from 'react';
import { getLeaderboard } from '../../helpers/leaderboard.helper';


function Leaderboard(): JSX.Element {
    const { router, dispatch, webApp, tgUser } = useSetup();

    useEffect(() => {
        if (tgUser) {
            getLeaderboard({
                router: router,
                webApp: webApp,
                dispatch: dispatch,
                tgUser: tgUser,
            });
        }
    }, [router, tgUser, webApp, dispatch]);

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).divo + ' | ' + setLocale(router.locale).leaderboard}</title>
                <meta name='description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).leaderboard} />
                <meta property='og:title' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).leaderboard} />
                <meta property='og:description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).leaderboard} />
                <meta charSet="utf-8" />
            </Head>
            <LeaderboardPage />
        </>
    );
}

export default Leaderboard;
