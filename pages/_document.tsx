import Document, { Html, Head, Main, NextScript } from 'next/document'
import { createOvermindSSR } from 'overmind'
import { config } from '../overmind'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { Children } from 'react'
import theme from '../src/theme'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
  }

  render() {
    const overmind = createOvermindSSR(config)

    overmind.state.count = 10

    return (
      <Html>
        <Head>
          <meta name='theme-color' content={theme.palette.primary.main} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__OVERMIND_MUTATIONS = ${JSON.stringify(overmind.hydrate())}`,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
