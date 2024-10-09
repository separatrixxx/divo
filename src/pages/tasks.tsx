import { TasksPage } from '../../page_components/TasksPage/TasksPage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { useEffect } from 'react';
import { getTasks } from '../../helpers/tasks.helper';


function Tasks(): JSX.Element {
  const { router, dispatch, webApp, tgUser } = useSetup();

  useEffect(() => {
      if (tgUser) {
          getTasks({
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
        <title>{setLocale(router.locale).divo + ' | ' + setLocale(router.locale).tasks}</title>
        <meta name='description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).tasks} />
        <meta property='og:title' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).tasks} />
        <meta property='og:description' content={setLocale(router.locale).divo + ' | ' + setLocale(router.locale).tasks} />
        <meta charSet="utf-8" />
      </Head>
      <TasksPage />
    </>
  );
}

export default Tasks;
