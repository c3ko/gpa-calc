<template>
    <table class="table mx-auto w-3/4 my-4 bg-white border rounded border-gray-400">
        <thead>
            <tr>
                <th class="px-2 text-center w-1 py-4 border rounded border-gray-400"><CheckBox /></th>
                <th class="px-2 text-center rounded font-bold text-gray-800 py-4 text-sm border-r border-gray-400">Course Name or Code</th>
                <th class="px-4 text-center rounded py-4 font-bold text-gray-800 text-sm border-r border-gray-400">Credits</th>
                <th class="px-4 text-center rounded py-4 font-bold text-gray-800 text-sm">Mark (%)</th>
                <th class="px-4 text-center border rounded py-4 font-bold text-gray-800 text-sm"></th>
            </tr>
        </thead>
            
        <tbody class="text-gray-900  text-sm ">
            <tr v-for="course in courses" :key="course.id">
                <td class="px-2 border border-gray-400 py-2"><CheckBox /></td>
                <td class="w-64 border rounded border-l-0 border-gray-400 font-normal text-gray-700">
                    <input v-bind:data-key="course.id" :value="course.courseName" @input="changeCourseName" class="w-full block appearance-none bg-white px-4 py-2 leading-tight focus:outline-none focus:shadow-outline" type="text" >
                </td>
                <td class=" relative border rounded border-gray-400 ">
                    <div class="relative flex flex-wrap md:flex-no-wrap items-center">
                        <select v-bind:data-key="course.id" v-model="course.courseWeight" @change="changeCourseWeight" id="weight-select" class=" w-24 block appearance-none bg-white px-4 py-2 leading-tight focus:outline-none focus:shadow-outline">
                            <option class="" value="" disabled selected>Weight...</option>
                            <option :value="courseWeight" v-for="courseWeight in courseWeightOptions" :key="courseWeight">{{ courseWeight }}</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </td>
                <td class="border rounded border-gray-400 w-16">
                    <input v-bind:data-key="course.id" :value="course.courseMark" @input="changeCourseMark" type="text" class="w-full block appearance-none bg-white px-4 py-2 leading-tight focus:outline-none focus:shadow-outline" >
                </td>
                <td class="border border-gray-400 flex items-center justify-center py-2">
                    <button v-on:click="removeCourseHandler"><img v-bind:data-key="course.id" height="20px" width="20px" src="/img/close_2.svg" alt="close course"></button>
                </td>
            </tr>
            <tr class="text-center w-full">
                <td colspan="5" class="py-2 text-center w-full item border rounded border-gray-400"><button v-on:click="addCourseHandler" class="btn btn-green-outline px-16 py-2 border border-gray-500 ">New Course</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import CheckBox from './CheckBox'
export default {
    name: 'GradeList',
    props: ['yearId'],
    data () {
        return {
            checkAll: false,
            checkedIndices: [],
            courseWeightOptions: ['0.5', '1.0']
        }
       

    },
    components: {
        CheckBox,
        
    },
    computed: {
        courses(){ 
            return Object.values(this.$store.state.coursesAdded).filter(course => course.yearId === this.$props.yearId)
        }
    },

    methods: {
        addCourseHandler: function (event){
            if (event)
                this.$store.commit('addCourse', this.$props.yearId)
        },

        removeCourseHandler: function(event) {
            if (event){
                this.$store.commit('removeCourse', {yearID: this.$props.yearId, courseID: event.target.getAttribute('data-key')})
                console.log(event.target)
            }
        },

        changeCourseName: function(event) {
            if (event) {
                console.log("Id", event.target.getAttribute('data-key'), " value: " , event.target.value)
                this.$store.commit("changeCourseName", { courseID: event.target.getAttribute('data-key'), courseName: event.target.value })
            }
        },
        changeCourseWeight: function(value) {
                this.$store.commit("changeCourseWeight", { courseID: value.id, courseWeight: value.courseWeight })
        },
        changeCourseMark: function(event) {
            if (event) {
                console.log("Id", event.target.getAttribute('data-key'), " value: " , event.target.value)
                this.$store.commit("changeCourseMark", { courseID: event.target.getAttribute('data-key'), courseMark: event.target.value })
            }
        },
    }
  
}
</script>

<style>

</style>