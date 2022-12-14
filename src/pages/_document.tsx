import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) =>
            function enhance(props) {
              return sheet.collectStyles(<App {...props} />);
            },
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="description" content="" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link rel="apple-touch-icon" href="/img/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />

          <meta name="theme-color" content="#06092B" />

          <meta property="og:title" content="page title" />
          <meta
            property="og:type"
            content="short description about the company or what this website does"
          />
          <meta property="og:url" content="url do site aqui" />
          <meta property="og:image" content="/img/banner-1.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
