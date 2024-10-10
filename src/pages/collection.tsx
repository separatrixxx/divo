import { CollectionPage } from "../../page_components/CollectionPage/CollectionPage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { getModels } from "../../helpers/models.helper";
import { useEffect } from "react";
import { getUser } from "../../helpers/user.helper";


function Collection(): JSX.Element {
    const { router, dispatch, webApp, tgUser } = useSetup();

    useEffect(() => {
        if (tgUser) {
            getUser({
                router: router,
                webApp: webApp,
                dispatch: dispatch,
                tgUser: tgUser,
            });

            getModels({
                router: router,
                dispatch: dispatch,
                webApp: webApp,
                tgUser: tgUser,
            });
        }
    }, [router, tgUser, webApp, dispatch]);

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).divo + ' | ' + setLocale(router.locale).collection}</title>
                <meta name='description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).collection} />
                <meta property='og:title' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).collection} />
                <meta property='og:description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).collection} />
                <meta charSet="utf-8" />
            </Head>
            <CollectionPage />
        </>
    );
}

export default Collection;
