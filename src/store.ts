import Vue from 'vue'

const state = Vue.observable({
  count: 0
})

const store = {
  get state() {
    return state
  },

  increment() {
    state.count++
  }
}

export default store
