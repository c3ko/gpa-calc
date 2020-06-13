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
  state: {
    schoolsId: 1, // 0 reserved for initial prior school entry
    yearsId: 0,
    coursesId: 0,

    schoolsAdded: {

    },
    yearsAdded: {
      
    },

    coursesAdded: {

    }

  },
  mutations: {
    addNewSchool: function (state) {
      Vue.set(state.schoolsAdded, state.schoolsId, {
        id: state.schoolsId,
        OMSASID: null,
        years: []
      })

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
      state.yearsAdded[state.yearsId] = {
        id: state.yearsId,
        courses: []
      }
      state.yearsId++
    },

    removeYear: function(state, yearID) {
        state.yearsAdded[yearID].courses.map(courseId => {
          
          store.commit('removeCourse', courseId)
        })
    },

    
    addCourse: function(state, yearID) {
      
      state.yearsAdded[yearID].courses.push(state.coursesId)
      state.coursesAdded[state.coursesAdded] = {
        id: state.coursesAdded,
        courseName: '',
        courseWeight: '',
        courseMark: ''
      }
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
  },

  getters: {
    schools : state => Object.values(state.schoolsAdded),
    years: state => Object.values(state.yearsAdded),
    courses: state => Object.values(state.coursesAdded)
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
