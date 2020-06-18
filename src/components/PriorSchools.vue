<template>
  <div>
      <h2 class="mt-4 mb-2 text-gray-800 font-sarif font-semibold text-xl">Post Secondary Schools Attended</h2>
      <p class="text-gray-500">Add ALL universities attended below along with ALL courses taken</p>
      <ul class="mt-8">

        <li v-for="school in schools" v-bind:key="school.id">
          <PriorSchoolCard v-bind:schoolId="school.id" v-bind:OMSASID="school.OMSASID"/>
        </li>
      </ul>
      <button v-on:click="addNewSchool" class="btn btn-green-outline mb-4">Add another School</button>
  </div>
</template>

<script>
import PriorSchoolCard from './PriorSchoolCard'
export default {
  name: 'PriorSchool',
  created : function() {

  },

  computed: {
    schools() {
      return this.$store.state.schoolsAdded
    },

  },

  components: {
    PriorSchoolCard
  },
  methods: {
    addNewSchool: function() {
      this.$store.commit('addNewSchool', this.year)
    }
  }
}
</script>

<style>
  .btn {
    @apply font-semibold text-sm py-2 px-6 rounded;
  }
  .btn-green {
    @apply bg-green-400 text-white;
  }

  .btn-green-outline {
      @apply bg-transparent text-gray-700 border border-gray-500;
  }
  .btn-green-outline:hover {
      @apply text-white border-transparent bg-green-700 rounded;
  }
</style>