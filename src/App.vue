<template>
  <div id="app">
    <output>{{ state.count }}</output>
    <button type="button" @click="increment">+1</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from './store'

export default Vue.extend({
  name: 'App',

  computed: {
    state: () => store.state
  },

  methods: {
    increment: store.increment
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

output {
  display: block;
  font-weight: bold;
  font-size: 64px;
}

button {
  display: inline-block;
  padding: 4px 18px;
  background-color: #373737;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
}

button:hover {
  background-color: #7d7d7d;
}
</style>
