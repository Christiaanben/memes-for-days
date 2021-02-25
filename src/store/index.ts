import Vue from 'vue'
import Vuex from 'vuex'
import Meme from '@/models/meme'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    memes: [
      new Meme({
        image: 'https://i.kym-cdn.com/entries/icons/original/000/030/297/Screen_Shot_2019-07-02_at_2.49.25_PM.png',
        title: 'Oh Billy, I\'m Really Proud of You',
        description: 'Oh Billy, I\'m Really Proud of You is an exploitable comic template created by SrGrafo in which a boy named Billy goes to search something in Google and an FBI Agent monitoring his activity expresses pride in Billy for what he searches.'
      }),
      new Meme({
        image: 'https://i.imgur.com/XV3cKud.gif',
        title: 'Dense MF',
        description: 'You Dense Motherfucker is an expression used to insult someone’s intelligence or decision making ability. The phrase is most often iterated in the form of a reaction image based on a panel from KC Green\'s webcomic series The Anime Club or alternatively, a screen capture of the villain character Syndrome from the 2005 Pixar short animation film Jack-Jack Attack.'
      }),
      new Meme({
        image: 'https://i.kym-cdn.com/entries/icons/original/000/036/345/EsMANJkW4AYbmvv.jpeg',
        title: 'Bernie Sanders Wearing Mittens',
        description: 'Bernie Sanders Wearing Mittens Sitting in a Chair refers to the numerous jokes and photoshops made from pictures of Vermont Senator Bernie Sanders\' attending the Inauguration of Joe Biden in a parka and mittens. In particular, a picture of Sanders sitting bundled up in a chair became an image macro and exploitable series.'
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
    SET_MEME (state, {newMeme, oldMeme}) {
      state.memes = [
      newMeme,
      ...state.memes.filter((meme)=> oldMeme !== meme ),
    ]
    },
    REMOVE_MEME (state, payload: Meme) {
      state.memes = state.memes.filter((meme)=> payload !== meme )
    }
  },
  plugins: [createPersistedState({
    getState (key, storage) {
      try {
        return JSON.parse(storage.getItem(key))
      } catch (e) {
        return {}
      }
    }
  })]
})

export default store
