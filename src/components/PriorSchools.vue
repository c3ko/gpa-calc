<template>
  <div class="bg-gray-200 w-full my-4 py-2 px-8 lg:max-w-full border border-gray-400">
      <h2 class="mb-2 text-gray-800 font-sarif font-semibold text-xl">Post Secondary Schools Attended</h2>
      <p class="text-gray-500">Add ALL universities attended below</p>
      <div class="inline-block relative w-64">
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="" disabled selected>Select Institution...</option>
          <option v-for="school in schools" :key="school.name">{{ school.name }}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
  </div>
</template>

<script>
import { UniList } from '../data/uniGPA'

export default {
  data () {
    return {
      schools: UniList
    }
  }

}
</script>

<style>

</style>