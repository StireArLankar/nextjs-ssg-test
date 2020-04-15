import { AppProps } from 'next/app'
import { Provider } from 'overmind-react'
import { app } from '../overmind'
import Layout from '../components/Layout'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from '../src/theme'
import { useEffect } from 'react'

export default ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider value={app}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}
