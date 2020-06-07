<template>
  <div id="app" class="">
    <Navbar />
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import Navbar from './components/Navbar.vue'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,

  },
  mutations: {
    increment (state) {
      state.count++
    },
    
  }
})

export default {
  name: 'App',
  components: {
    Navbar,
    
  },
  store
}
</script>

<style>

</style>
