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
                    <input class="w-full" type="text" >
                </td>
                <td class="border rounded border-gray-400">
                    <input class="w-full" type="text" >
                </td>
                <td class="border rounded border-gray-400">
                    <input class="w-full" type="text" >
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
}
</script>

<style>

</style>