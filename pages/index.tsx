import Head from 'next/head'
import { useEffect } from 'react'
import { AnimatedDivs } from '../components/AnimatedDivs'
import { useApp } from '../overmind'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export default () => {
  const { state, actions } = useApp()

  useEffect(actions.toggleActive, [actions])

  const classes = useStyles()

  return (
    <div className={classes.container}>
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

      <AnimatedDivs active={state.animated} toggle={actions.toggleActive} />

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
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(2),
    },
  })
)
