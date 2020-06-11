<template>
  <div id="app" class="">
    <Navbar />
    <div class="container px-4 mx-auto max-w-3xl">
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
  schoolsId: 0,
  yearsId: 0,
  coursesId: 0,
  state: {
    schoolsAdded: {
      0: {
        years: [] //year ids
      }
    },
    yearsAdded: {
      
    },

    coursesAdded: {

    }

  },
  mutations: {
    addNewSchool: function (state, OMSASID) {
      
      state.schoolsAdded[state.schoolsId] = {
        OMSASID,
        years: []
      }
      state.schoolsId++
    },

    changeSchool: function (state, schoolID, newOMSASID) {
      state.schoolsAdded[schoolID].OMSASID = newOMSASID
      
    },
    
    removeSchool: function (state, schoolID) {
      state.schoolsAdded[schoolID].years.map(yearId => {
        store.commit('removeYear', yearId)
      })

      delete state.schoolsAdded[schoolID]
 
    },

    addYear: function (state, schoolID) {
      
      state.schoolsAdded[schoolID].years.push(state.yearsId)
      state.yearsId++
    },

    removeYear: function(state, yearID) {
        state.yearsAdded[yearID].courses.map(courseId => {
          
          store.commit('removeCourse', courseId)
        })
    },

    
    addCourse: function(state, yearID) {
      
      state.yearsAdded[yearID].courses.push(state.coursesId)
      state.coursesId++
    },

    changeCourseName: function(state, courseID, courseName) {
      state.coursesAdded[courseID].courseName = courseName
    },

    changeCourseWeight: function(state, courseID, courseWeight) {
      state.coursesAdded[courseID].courseWeight = courseWeight
    },

    changeCourseMark: function(state, courseID, courseMark) {
      state.coursesAdded[courseID].courseMark = courseMark
    },

    removeCourse: function(state, courseID) {
      delete state.coursesAdded[courseID]
    } 

    
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
