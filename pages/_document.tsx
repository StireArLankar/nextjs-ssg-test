import Document, { Html, Head, Main, NextScript } from 'next/document'
import { createOvermindSSR } from 'overmind'
import { config } from '../overmind'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const overmind = createOvermindSSR(config)

    overmind.state.count = 10

    return (
      <Html>
        <Head />
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
