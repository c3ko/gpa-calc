<template>
  <div id="app" class="">
    <Navbar />
    <GradeList />
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import Navbar from './components/Navbar.vue'
import GradeList from './components/GradeList'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default {
  name: 'App',
  components: {
    Navbar,
    GradeList
  }
}
</script>

<style>

</style>
