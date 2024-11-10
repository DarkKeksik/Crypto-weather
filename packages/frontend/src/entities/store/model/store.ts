import { create } from "zustand"

type TNews = null | Array<any>

type TStore = {
  news: TNews
  setNews: (newNews: TNews) => void
}

export const useStore = create<TStore>(set => ({
  news: null,
  setNews: newNews => {
    set(() => ({ news: newNews }))
  },
}))
