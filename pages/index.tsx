import Head from 'next/head'
import Layout from '../components/Layout'
import { useApp } from '../overmind'

export default () => {
  const { state, actions } = useApp()

  return (
    <Layout>
      <div className='container'>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main>
          <h1 className='title'>
            Welcome to <a href='https://nextjs.org'>Next.js!</a>
          </h1>

          <h2>Count: {state.count}</h2>
          <button onClick={actions.increaseCount}>click me</button>
        </main>

        <footer>
          <a
            href='https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by <img src='/zeit.svg' alt='ZEIT Logo' />
          </a>
        </footer>
      </div>
    </Layout>
  )
}
