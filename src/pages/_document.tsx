import Document, { Html, Head, Main, NextScript } from "next/document";

export default function() {
   const getInitialProps = async(ctx: any)=> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

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
            src="https://kit.fontawesome.com/eba8739c0f.js"
            crossOrigin="anonymous"
          ></script>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script
            type="module"
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            noModule
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          ></script>
          <title>Drehskil UI</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  
}
