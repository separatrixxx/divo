import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';


export default function Document() {
  return (
    <Html>
      <Head>
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="beforeInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(98638311, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true,
                 webvisor:true
            });
          `}
        </Script>
        <Script id="send-utm-metrika" strategy="beforeInteractive">
          {`
            function getUTMParams() {
              const params = new URLSearchParams(window.location.search);
              let utmParams = {};

              ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
                if (params.get(param)) {
                  utmParams[param] = params.get(param);
                }
              });

              return utmParams;
            }

            function sendUTMToYandexMetrica() {
              const utmParams = getUTMParams();

              if (Object.keys(utmParams).length > 0) {
                ym(98638311, 'params', {
                  UTM: utmParams
                });
              }
            }

            document.addEventListener('DOMContentLoaded', sendUTMToYandexMetrica);
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/98638311" alt="" style={{ position: 'absolute', left: '-9999px' }} />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
