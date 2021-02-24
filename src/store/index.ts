import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    memes: [
      {}
    ]
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
