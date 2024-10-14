import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import Image from 'next/image';


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

            ym(98634248, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true,
                 webvisor:true
            });
          `}
        </Script>
        <noscript>
          <div>
            {/* Заменяем <img> на <Image> */}
            <Image src="https://mc.yandex.ru/watch/98634248" alt="" layout="fill" style={{ position: 'absolute', left: '-9999px' }} />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
