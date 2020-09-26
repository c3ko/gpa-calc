<template>
    <table class="table mx-auto w-3/4 my-4 bg-white border rounded border-gray-400">
        <thead>
            <tr>
                <th class="px-2 text-center w-1 py-4 border rounded border-gray-400">
                    <label class="custom-label flex">
                        <div class="bg-white rounded shadow w-5 h-5 flex border border-gray-400 justify-center items-center">
                            <input v-bind:data-key="yearId" v-on:click="toggleAllCoursesHandler" type="checkbox" class="hidden" checked>
                            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                        </div>
                    </label>
                </th>
                <th class="px-2 text-center rounded font-bold text-gray-800 py-4 text-sm border-r border-gray-400">Course Name or Code</th>
                <th class="px-4 text-center rounded py-4 font-bold text-gray-800 text-sm border-r border-gray-400">Credits</th>
                <th class="px-4 text-center rounded py-4 font-bold text-gray-800 text-sm">Mark (%)</th>
                <th class="px-4 text-center border rounded py-4 font-bold text-gray-800 text-sm"></th>
            </tr>
        </thead>
            
        <tbody class="text-gray-900  text-sm ">
            <tr v-for="course in courses" :key="course.id">
                <td class="px-2 border border-gray-400 py-2">
                    <label class="custom-label flex">
                        <div class="bg-white rounded shadow w-5 h-5 flex border border-gray-400 justify-center items-center">
                            <input v-bind:data-key="course.id" type="checkbox" class="hidden" v-on:click="toggleCourseHandler" v-bind:checked="course.courseChecked">
                            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                        </div>
                    </label>                   
                </td>
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
export default {
    name: 'GradeList',
    props: ['yearId'],
    data () {
        return {
            checkAll: false,
            courseWeightOptions: ['0.5', '1.0']
        }
       

    },
    components: {
        
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
                console.log(event.target.getAttribute('data-key'))
                this.$store.commit('removeCourse', {yearID: this.$props.yearId, courseID: event.target.getAttribute('data-key')})
            }
        },

        changeCourseName: function(event) {
            if (event) {
                this.$store.commit("changeCourseName", { courseID: event.target.getAttribute('data-key'), courseName: event.target.value })
            }
        },
        changeCourseWeight: function(event) {
                this.$store.commit("changeCourseWeight", { courseID: event.target.getAttribute('data-key'), courseWeight: event.target.value })
        },
        changeCourseMark: function(event) {
            if (event) {
                this.$store.commit("changeCourseMark", { courseID: event.target.getAttribute('data-key'), courseMark: event.target.value })
            }
        },

        toggleCourseHandler: function(event) {
            if (event){
                this.$store.commit('toggleCourse', event.target.getAttribute('data-key'))
            }
        },
        toggleAllCoursesHandler: function(event) {
            if (event){
                console.log(event.target.checked)
                this.$store.commit('toggleAllYearCourses', { yearID: event.target.getAttribute('data-key'), currentCheck: event.target.checked})
            }
        },
    
    }
  
}
</script>

<style>
    .custom-label input:checked + svg {
        display: block !important;
    }
</style>