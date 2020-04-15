import { AppProps } from 'next/app'
import { Provider } from 'overmind-react'
import { app } from '../overmind'

export default ({ Component, pageProps }: AppProps) => {
  return (
    <Provider value={app}>
      <Component {...pageProps} />
    </Provider>
  )
}
