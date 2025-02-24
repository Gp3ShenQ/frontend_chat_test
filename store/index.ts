import { defineStore } from 'pinia'

type User = {
  account: string | null
  email: string | null
  age: number | null
  name: string | null
}

export const useCommonStore = defineStore('commonStore', {
  state: () => ({
    isLogin: false as boolean,
    user: {} as User,
  }),
})
