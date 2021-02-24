import Vue from 'vue'
import Vuex from 'vuex'
import Meme from '@/models/meme'
import createPersistedState from 'vuex-persistedstate'

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
    ADD_MEME (state, payload: Meme) {
      state.memes = [
        ...state.memes,
        payload
      ]
    },
    REMOVE_MEME (state, payload: Meme) {
      state.memes = state.memes.filter((meme)=> payload !== meme )
    }
  },
  plugins: [createPersistedState({
    getState (key, storage) {
      try {
        const state = JSON.parse(storage.getItem(key))
        console.log(state)
        return state
      } catch (e) {
        return {}
      }
    }
  })]
})

export default store
