import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { getModels } from "../../helpers/models.helper";
import { useEffect } from "react";


function Main(): JSX.Element {
  const { router, dispatch, webApp, tgUser } = useSetup();

  if (webApp) {
      webApp.expand();
  }
  
  useEffect(() => {
    if (tgUser) {
      getModels({
        router: router,
        webApp: webApp,
        dispatch: dispatch,
      });
    }
  }, [router, tgUser, webApp, dispatch]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).divo}</title>
        <meta name='description' content={setLocale(router.locale).divo} />
        <meta property='og:title' content={setLocale(router.locale).divo} />
        <meta name='og:description' content={setLocale(router.locale).divo} />
        <meta charSet="utf-8" />
      </Head>
      <MainPage />
    </>
  );
}

export default Main;
