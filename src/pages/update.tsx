import { UpdatePage } from '../../page_components/UpdatePage/UpdatePage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";


function Update(): JSX.Element {
  const { router } = useSetup();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).divo + ' | ' + setLocale(router.locale).update}</title>
        <meta name='description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).update} />
        <meta property='og:title' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).update} />
        <meta property='og:description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).update} />
        <meta charSet="utf-8" />
      </Head>
      <UpdatePage />
    </>
  );
}

export default Update;
