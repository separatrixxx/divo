import { FriendsPage } from '../../page_components/FriendsPage/FriendsPage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";


function Friends(): JSX.Element {
    const { router } = useSetup();

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
