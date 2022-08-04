import { defineStore } from 'pinia'

export type MainState = {
  message: string
}

export const useMainStore = defineStore('main', {
  state: () => ({ message: 'Hello Pinia' }),
  getters: {
    getMessage: (state) => state.message
  }
})
