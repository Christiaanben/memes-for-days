import Vue from 'vue'
import Vuex from 'vuex'
import Meme from '@/models/meme'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    memes: [
      new Meme({
        image: 'https://i.imgur.com/S2lYrKD.gif',
        title: 'Titl name',
        description: 'some description'
      })
    ]
  },
  getters: {
    memes: state => state.memes
  },
  mutations: {
    ADD_MEME (state, meme) {
      state.memes = [
        ...state.memes,
        meme
      ]
    }
  }
})

export default store
