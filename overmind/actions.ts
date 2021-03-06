import { Action } from 'overmind'

export const increaseCount: Action = ({ state }) => {
  state.count++
}

export const decreaseCount: Action = ({ state }) => {
  state.count--
}

export const toggleActive: Action = ({ state }) => {
  state.animated = !state.animated
}
