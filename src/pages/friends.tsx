import { FriendsPage } from '../../page_components/FriendsPage/FriendsPage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { useEffect } from 'react';
import { getRefs } from '../../helpers/user.helper';


function Friends(): JSX.Element {
    const { router, dispatch, webApp, tgUser } = useSetup();

    useEffect(() => {
        if (tgUser) {
            getRefs({
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
                <title>{setLocale(router.locale).divo + ' | ' + setLocale(router.locale).friends}</title>
                <meta name='description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).friends} />
                <meta property='og:title' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).friends} />
                <meta property='og:description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).friends} />
                <meta charSet="utf-8" />
            </Head>
            <FriendsPage />
        </>
    );
}

export default Friends;
