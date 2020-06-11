<template>
  <div>
      <h2 class="mb-2 text-gray-800 font-sarif font-semibold text-xl">Post Secondary Schools Attended</h2>
      <p class="text-gray-500">Add ALL universities attended below along with ALL courses taken</p>
      <ul class="mt-8">
        <li>
          <PriorSchoolCard />
        </li>
      </ul>
      <button class="btn btn-green-outline">Add another School</button>
  </div>
</template>

<script>
import PriorSchoolCard from './PriorSchoolCard'
export default {
  name: 'PriorSchool',
  components: {
    PriorSchoolCard
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