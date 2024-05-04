import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  getInitialProps = async (ctx: any) => {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  };

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <meta charSet="UTF-8" />
          <script
            src="https://kit.fontawesome.com/1d374d8ad4.js"
            crossOrigin="anonymous"
            async
          ></script>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script
            type="module"
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
            async
          ></script>
          <script
            noModule
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
            async
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
