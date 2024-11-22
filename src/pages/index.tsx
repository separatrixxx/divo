import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { getModels } from "../../helpers/models.helper";
import { useEffect } from "react";
import { getRefs, getUser } from "../../helpers/user.helper";


function Main(): JSX.Element {
  const { router, dispatch, webApp, tgUser, firstVisit, clicker } = useSetup();

  useEffect(() => {
    if (tgUser) {
      getUser(firstVisit, clicker.clicker, {
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

      getRefs({
        router: router,
        webApp: webApp,
        dispatch: dispatch,
        tgUser: tgUser,
    });
    }
  }, [router, tgUser, webApp, firstVisit,  dispatch]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).divo}</title>
        <meta name='description' content={setLocale(router.locale).divo} />
        <meta property='og:title' content={setLocale(router.locale).divo} />
        <meta property='og:description' content={setLocale(router.locale).divo} />
        <meta charSet="utf-8" />
      </Head>
      <MainPage />
    </>
  );
}

export default Main;
