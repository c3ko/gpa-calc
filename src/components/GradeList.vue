<template>
    <table class="table mx-auto w-3/4 my-4 bg-white border rounded border-gray-400">
        <thead>
            <tr>
                <th class="px-2 text-center w-1 py-4 border rounded border-gray-400"><CheckBox /></th>
                <th class="px-2 text-center rounded font-bold text-gray-800 py-4 text-sm border-r border-gray-400">Course Name or Code</th>
                <th class="px-4 text-center rounded py-4 font-bold text-gray-800 text-sm border-r border-gray-400">Credits</th>
                <th class="px-4 text-center rounded py-4 font-bold text-gray-800 text-sm">Mark</th>
            </tr>
        </thead>
            
        <tbody class="">
            <tr v-for="course in courses" :key="course.id">
                <td class="px-2 border border-gray-400 py-2"><CheckBox /></td>
                <td class="border rounded border-l-0 border-gray-400 font-normal text-gray-700">
                    <input v-bind:data-key="course.id" :value="course.courseName" @input="changeCourseName" class="w-full" type="text" >
                </td>
                <td class="border rounded border-gray-400">
                    <input v-bind:data-key="course.id" class="w-full" :value="course.courseMark" @input="changeCourseMark" type="text" >
                </td>
                <td class="border rounded border-gray-400">
                    <input v-bind:data-key="course.id" class="w-full" :value="course.courseWeight" @input="changeCourseWeight" type="text" >
                </td>
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
            checkedIndices: []
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
        changeCourseName: function(event) {
            if (event) {
                console.log("Id", event.target.getAttribute('data-key'), " value: " , event.target.value)
                this.$store.commit("changeCourseName", { courseID: event.target.getAttribute('data-key'), courseName: event.target.value })
            }
        },
        changeCourseWeight: function(event) {
            if (event) {
                console.log("Id", event.target.getAttribute('data-key'), " value: " , event.target.value)
                this.$store.commit("changeCourseWeight", { courseID: event.target.getAttribute('data-key'), courseWeight: event.target.value })
            }
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