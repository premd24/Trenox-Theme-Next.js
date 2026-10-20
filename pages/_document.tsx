import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href="/webclip.svg" rel="apple-touch-icon" />
        {/* Scroll reveals only hide content once we know JS will reveal it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
