<template>
    <table class="table-auto mx-auto lg:max-w-full w-3/4 my-4 bg-white border rounded border-gray-400">
        <thead>
            <tr>
                <th class="px-2 text-center w-1 py-4 border rounded border-gray-400"><CheckBox /></th>
                <th class="px-2 rounded font-bold text-gray-800 py-4 text-sm border-r border-gray-400">Course Name or Code</th>
                <th class="px-4 rounded py-4 font-bold text-gray-800 text-sm border-r border-gray-400">Credits</th>
                <th class="px-4 rounded py-4 font-bold text-gray-800 text-sm">Mark</th>
            </tr>
        </thead>
            
        <tbody class="">
            <tr v-for="course in courseList" :key="course">
                <td class="px-2 border border-gray-400 py-2"><CheckBox /></td>
                <td class="border rounded border-l-0 border-gray-400 font-normal text-gray-700 px-4 py-2">{{ course.courseName }}</td>
                <td class="border rounded px-4 border-gray-400 py-2">{{ course.courseWeight }}</td>
                <td class="border rounded px-4 border-gray-400 py-2">{{ course.courseMark }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
//import GradeListItem from './GradeListItem'
import CheckBox from './CheckBox'
export default {
    name: 'GradeList',
    data () {
        return {
            courseList: [
                {id: 0, courseName: 'ASP 101', courseWeight: 0.5,  courseMark: 'A+'},
                {id: 1, courseName: 'HIST 212', courseWeight: 0.5, courseMark: 'B+'},
                {id: 2, courseName: 'MAT137', courseWeight: 1.0, courseMark: 'C+'}
            
            ]
        }
    },
    components: {
        CheckBox,
    },
    computed: {
        courses(){ 
            return Object.values(this.$store.state.coursesAdded)
        }
  },
}
</script>

<style>

</style>