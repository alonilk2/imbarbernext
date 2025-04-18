import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="canonical" href="https://www.imbarber.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "IM.Barber - אקדמיה לספרות, מספרה, מוצרי שיער וטיפוח",
              "url": "https://www.imbarber.com",
              "logo": "https://www.imbarber.com/assets/logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+972-52-7481028",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://www.facebook.com/idanbarber",
                "https://www.instagram.com/_im.barber_/"
              ]
            }
          `}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
