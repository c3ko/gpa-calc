<template>
  <div id="app" >
    <Navbar />
    <main id="main" class="container flex mx-auto max-w-6xl">
            <ProgressSideBar />
      <div id="schools-container" class="flex flex-col mt-24 px-4"> 
        <PriorSchools />
        <FutureSchools />
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import Navbar from './components/Navbar.vue'
import PriorSchools from './components/PriorSchools'
import ProgressSideBar from './components/ProgressSideBar'
import FutureSchools from './components/FutureSchools'
//import { calcCGPA } from './data/uniGPA'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    schoolsId: 0, // 0 reserved for initial prior school entry
    yearsId: 0,
    coursesId: 0,

    schoolsAdded: {

    },
    yearsAdded: {
      
    },

    coursesAdded: {

    },

    cGPA: null

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

    changeSchool: function (state, { schoolId, OMSASID }) {
      state.schoolsAdded[schoolId].OMSASID = OMSASID
    },
    
    removeSchool: function (state, schoolID) {
      state.schoolsAdded[schoolID].years.map(yearId => {
        store.commit('removeYear', {schoolID, yearId})
      })

      Vue.delete(state.schoolsAdded, schoolID)
 
    },

    addYear: function (state, schoolID) {
      
      state.schoolsAdded[schoolID].years.push(state.yearsId)
      Vue.set(state.yearsAdded, state.yearsId, {
        id: state.yearsId,
        schoolId: schoolID,
        yearInterval: null,
        gpa: null,
        courses: []
      })

      for(var i = 0; i < 5; i++)
        store.commit("addCourse", state.yearsId)

      state.yearsId++
    },

    removeYear: function(state, { schoolID, yearID }) {
        state.schoolsId[schoolID]
        Vue.delete(state.yearsAdded, yearID)
    },

    changeYearInterval: function(state, { yearID, yearInterval }) {
      state.yearsAdded[yearID].yearInterval = yearInterval
    },
    
    addCourse: function(state, yearID) {
      
      state.yearsAdded[yearID].courses.push(state.coursesId)
      Vue.set(state.coursesAdded, state.coursesId, {
        id: state.coursesId,
        yearId: yearID,
        courseName: '',
        courseWeight: '',
        courseMark: ''
      })
      state.coursesId++
    },

    changeCourseName: function(state, { courseID, courseName }) {
      state.coursesAdded[courseID].courseName = courseName
    },

    changeCourseWeight: function(state, { courseID, courseWeight} ) {
      state.coursesAdded[courseID].courseWeight = courseWeight
    },

    changeCourseMark: function(state, { courseID, courseMark }) {
      state.coursesAdded[courseID].courseMark = courseMark
    },

    removeCourse: function(state, { yearID, courseID}) {
      for(var i = state.yearsAdded[yearID].courses.length - 1; i >= 0; i--){
        if (state.yearsAdded[yearID].courses[i].courseID === courseID)
          state.yearsAdded[yearID].courses.splice(i, 1)
      }
      Vue.delete(state.coursesAdded, courseID)
    } 
  },

  getters: {
    /*
    cGPA: state => {
      // For each school calculate cGPA across all years
      state.schoolsAdded(school => {
        let courseList = state.yearsAdded[school.id]
      })
      let courseList = Object.values(state.coursesAdded).map(course => course.courseMark)
      return calcCGPA(courseList)
    },
    annualGPA: state => {
      // For each school calcute annual GPA for each year
      state.schoolsAdded(school => {

      })
      return state.yearsAdded
    }
    */
  }
  
})

export default {
  name: 'App',
  components: {
    Navbar,
    PriorSchools,
    ProgressSideBar,
    FutureSchools
  },
  store
}
</script>

<style>
  html {
    scroll-behavior: smooth;
  }

</style>
