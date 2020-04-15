import { Derive } from 'overmind'

export type IState = {
  count: number
  test: null | string
  animated: boolean
  testget: Derive<IState, boolean>
}

export const state: IState = {
  count: 0,
  test: null,
  animated: false,
  testget: ({ test }) => Boolean(test) && true,
}
