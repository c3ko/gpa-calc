<template>
  <div id="app" class="">
    <Navbar />
    <div class="container px-4 mx-auto">
      <PriorSchools />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import Navbar from './components/Navbar.vue'
import PriorSchools from './components/PriorSchools'

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
    PriorSchools
  },
  store
}
</script>

<style>

</style>
