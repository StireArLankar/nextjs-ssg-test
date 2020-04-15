import { AppProps } from 'next/app'
import { Provider } from 'overmind-react'
import { app } from '../overmind'
import Layout from '../components/Layout'

export default ({ Component, pageProps }: AppProps) => {
  return (
    <Provider value={app}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
