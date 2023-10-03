import { defineStore } from 'pinia'
import state from './state'
import getters from './getters'
import actions from './actions'
import type { StoreDefinition } from 'pinia'
import type { Actions, Getters, PostState } from '../types'

export const useStore: StoreDefinition<string, PostState, Getters, Actions> = defineStore('store', {
  state,
  getters,
  actions
})
