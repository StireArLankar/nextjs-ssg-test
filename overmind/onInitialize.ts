import { OnInitialize, rehydrate } from 'overmind'

export const onInitialize: OnInitialize = ({ state }, t) => {
  if (typeof window !== 'undefined') {
    const mutations = (window as any).__OVERMIND_MUTATIONS

    rehydrate(state, mutations)
  }

  state.test = 'x'
  state.count++
}
