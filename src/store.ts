import Vue from 'vue'

const state = Vue.observable({
  value: 0
})

const store = {
  get state() {
    return state
  },

  increment() {
    state.value++
  }
}

export default store
