import { ProfilePage } from '../../page_components/ProfilePage/ProfilePage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { useEffect } from 'react';
import { getUser } from '../../helpers/user.helper';


function Profile(): JSX.Element {
    const { router, dispatch, webApp, tgUser } = useSetup();


    useEffect(() => {
        if (tgUser) {
            getUser({
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
