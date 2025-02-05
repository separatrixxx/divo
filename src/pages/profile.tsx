import { ProfilePage } from '../../page_components/ProfilePage/ProfilePage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { useEffect } from 'react';
import { getCoinsInfo, getUser } from '../../helpers/user.helper';
import { getDivosit } from '../../helpers/divosit.helper';


function Profile(): JSX.Element {
    const { router, dispatch, webApp, tgUser, firstVisit } = useSetup();

    useEffect(() => {
        if (tgUser) {
            getUser({
                router: router,
                webApp: webApp,
                dispatch: dispatch,
                tgUser: tgUser,
            });

            getCoinsInfo({
                router: router,
                webApp: webApp,
                dispatch: dispatch,
                tgUser: tgUser,
            });

            getDivosit({
                router: router,
                webApp: webApp,
                dispatch: dispatch,
                tgUser: tgUser,
            });
        }
    }, [router, tgUser, webApp, firstVisit, dispatch]);

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).divo + ' | ' + setLocale(router.locale).profile}</title>
                <meta name='description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).profile} />
                <meta property='og:title' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).profile} />
                <meta property='og:description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).profile} />
                <meta charSet="utf-8" />
            </Head>
            <ProfilePage />
        </>
    );
}

export default Profile;
