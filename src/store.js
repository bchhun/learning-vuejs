import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {name: 'Barbie', qte: 1, price: 19.95},
      {name: 'Ken', qte: 1, price: 19.75}
    ]
  },
  mutations: {
    add_item (state) {
      state.items.push(
        {name: 'Nouveau', qte: 1, price: 100}
      )
    },
    remove_item (state, { index }) {
      state.items.splice(index, 1)
    }
  }
})
