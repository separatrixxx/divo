import { InfoPage } from '../../page_components/InfoPage/InfoPage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";


function Friends(): JSX.Element {
    const { router } = useSetup();

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).divo + ' | ' + setLocale(router.locale).info}</title>
                <meta name='description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).info} />
                <meta property='og:title' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).info} />
                <meta property='og:description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).info} />
                <meta charSet="utf-8" />
            </Head>
            <InfoPage />
        </>
    );
}

export default Friends;
