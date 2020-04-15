import { createOvermind, Action, IConfig } from 'overmind'
import { createHook } from 'overmind-react'
import { namespaced, merge } from 'overmind/config'
import login from './login'
import { state } from './state'
import * as actions from './actions'
import { onInitialize } from './onInitialize'

export const config = merge(
  {
    state,
    actions,
    onInitialize,
  },
  namespaced({
    login,
  })
)

export const useApp = createHook<typeof config>()

export const app = createOvermind(config, {
  devtools: false,
})

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}
