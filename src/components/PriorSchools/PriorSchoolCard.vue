<template>
  <div v-bind:id="prevId" class="px-8 bg-gray-200 my-4 py-2 lg:max-w-full border border-gray-400">
      <div class="flex px-8 border-b border-gray-400 items-center justify-between">
        <h3 class="text-md py-2 font-medium text-grey-800">Prior School</h3>
        <button v-on:click="deleteHandler"><img class="w-4 h-4" src="/img/close.svg" alt="close" /></button>
      </div>
      <div class="flex flex-wrap md:flex-no-wrap mt-4 px-8 items-center">
        <label class="mr-2 mt-2 bg-gray-100 border border-gray-400 rounded p-2 text-sm font-semibold" for="school-select">Institution</label>
        <div class="inline-block mt-2 relative w-3/4">
            <select id="school-select" v-model="selectedSchool" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
              <option value="" disabled selected>Select Institution...</option>
              <option v-bind:value="{ id: school.id, name: school.name }" v-for="school in schools" :key="school.id">{{ school.name }}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
      </div>
      <ul class="my-4" v-if="initialSchoolSelect">
          <li class="" v-for="year in years" :key="year.id">
            <div class="flex flex-wrap md:flex-no-wrap px-8 items-center">
              <label class="mr-2 mt-2 bg-gray-100 border border-gray-400 rounded p-2 text-sm font-semibold" for="year-select">Year</label>
              <div class="inline-block mt-2 relative w-24">
                <select v-bind:data-key="year.id" v-model="year.yearInterval" @change="changeYearInterval" id="year-select" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
                  <option value="" disabled selected>Select Year...</option>
                  <option :value="yearInterval" v-for="yearInterval in yearIntervals" :key="yearInterval">{{ yearInterval }}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <h4 class="text-center font-semibold text-gray-800 mt-4">
              Courses
            </h4>
            <GradeList v-bind:yearId="year.id"/>
          </li>
          <button v-on:click="addYearHandler" class="btn btn-green-outline mx-8">Add Year</button>
      </ul>
  </div>
</template>

<script>
import { UniList } from '../../data/uniGPA'
import GradeList from '../GradeList/GradeList'
export default {
  name: 'PriorSchoolCard',
  components: {
    GradeList,
  },
  props: [
    'schoolId',
    'schoolName',
  ],
  data () {
    return {
      schools: Object.values(UniList).sort((a, b) => (a.name > b.name) ? 1: -1),
      selectedSchool: '',
      initialSchoolSelect: false,
      yearsAdded: Object.values(this.$store.state.yearsAdded),
      coursesAdded: Object.values(this.$store.state.yearsAdded),
      yearIntervals: ['00-01', '01-02', '02-03', '03-04', '04-05', '05-06', '06-07', '07-08', '08-09', '09-10', '10-11', '11-12',
      '12-13', '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20'
      ]
    }
  },

  computed: {
    years(){
      let yearsList = []
      for (let [, value] of Object.entries(this.$store.state.yearsAdded)) {
        if (value.schoolId === this.schoolId)
          yearsList.push(value)
      }
      return yearsList
    
    },
    courses(){ 
      return Object.values(this.$store.state.coursesAdded)
    },
    
    prevId() {
      return `prev-${this.schoolId}`
    },

  },
  methods: {
    deleteHandler: function (event) {
      if (event) {
        this.$store.commit("removeSchool", this.schoolId)
      }
    },
    addYearHandler: function (event) {
      if (event){
        console.log("Current School inside Prior school Card Component: ", this.$props.schoolId)
        this.$store.commit("addYear", this.$props.schoolId)
      }
    },
    changeYearInterval: function (event) {
      if (event) {
        console.log("Id", event.target.getAttribute('data-key'), " value: " , event.target.value)
        this.$store.commit("changeYearInterval", { yearID: event.target.getAttribute('data-key'), yearInterval: event.target.value })
      }
    }
  },
  created: function () {
    
  },
  watch: {
      selectedSchool: function (val){

          if (val.name.length > 0){
            const schoolId = this.schoolId
            const OMSASID = val.id
            this.$store.commit("changeSchool", { schoolId, OMSASID })
            if (!this.initialSchoolSelect){
              this.initialSchoolSelect = true
              this.$store.commit("addYear", schoolId);
            }
          }
      }
  }
  

}
</script>

<style>


</style>