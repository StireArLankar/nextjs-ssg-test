import { LoginComponent } from '../components/LoginComponent'
import { useApp } from '../overmind'
import { AnimatedDivs } from '../components/AnimatedDivs'
import { useEffect } from 'react'

export default () => {
  const { state, actions } = useApp()

  useEffect(actions.toggleActive, [actions])

  return (
    <>
      <p>This is the about page</p>
      <AnimatedDivs active={state.animated} toggle={actions.toggleActive} />
      <LoginComponent />
    </>
  )
}
