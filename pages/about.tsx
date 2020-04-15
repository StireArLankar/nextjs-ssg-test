import { LoginComponent } from '../components/LoginComponent'
import { useApp } from '../overmind'
import { AnimatedDivs } from '../components/AnimatedDivs'
import { useEffect } from 'react'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export default () => {
  const { state, actions } = useApp()

  useEffect(actions.toggleActive, [actions])

  const classes = useStyles()

  return (
    <>
      <p className={classes.p}>This is the about page</p>
      <AnimatedDivs active={state.animated} toggle={actions.toggleActive} />
      <LoginComponent />
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    p: {
      padding: theme.spacing(2),
      background: theme.palette.grey[400],
    },
  })
)
