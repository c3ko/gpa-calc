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
import PriorSchools from './components/PriorSchools/PriorSchools'
import ProgressSideBar from './components/ProgressSideBar'
import FutureSchools from './components/FutureSchools/FutureSchools'
import { calcCGPA, getALLOMSASGPA } from './data/uniGPA'


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

      for(var i = 0; i < 10; i++)
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
      const OMSASID = state.schoolsAdded[state.yearsAdded[yearID].schoolId].OMSASID
      Vue.set(state.coursesAdded, state.coursesId, {
        id: state.coursesId,
        yearId: yearID,
        OMSASID,
        courseName: '',
        courseWeight: '',
        courseMark: '',
        courseChecked: true,
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

    toggleCourse: function(state, courseID){
      state.coursesAdded[courseID].courseChecked = !(state.coursesAdded[courseID].courseChecked)
    },

    toggleAllYearCourses: function(state, { yearID, currentCheck }){
      state.yearsAdded[yearID].courses.map(courseID => {
        state.coursesAdded[courseID].courseChecked = currentCheck
      })
    },

    removeCourse: function(state, { yearID, courseID}) {
      var index = state.yearsAdded[yearID].courses.indexOf(parseInt(courseID))
      if (index > -1){
        state.yearsAdded[yearID].courses.splice(index, 1)
      }
      Vue.delete(state.coursesAdded, courseID)
    } 
  },

  getters: {
    /* Returns { fullCGPA, schoolCGPAList }
    - fullCGPA is the cGPA calculated for all courses listed for all schools/years.
    - schoolscGPAList contains list with mappings { id, schoolcGPA } where schoolcGPA is cGPA calculated for all years at that school

    */
   
    cGPA: state => {
      // For each school calculate cGPA across all years
      let courseList = getALLOMSASGPA(Object.values(state.coursesAdded))
      return calcCGPA(courseList)
    },
    
    /*
    annualGPA: state => {
      // For each school calculate annual GPA for each year
      state.schoolsAdded(school => {

      })
      return state.yearsAdded
    },
   
    customcGPA: state => {

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
