<template>
  <div id="future-schools" class="">
      <h2 id="future-heading" class="mt-4 mb-2 text-gray-800 font-sarif font-semibold text-xl">Schools To Apply For</h2>
      <p class="text-gray-500">Add (Ontario) Medical Schools you wish to apply to.</p>
      <h3 class="text-md py-2 font-medium text-grey-800"></h3>
  </div>
</template>

<script>
export default {
  name: 'FutureSchools',
  props: ['schoolId', 'schoolName'],
  data: function () {
    return {
      
    }
  },

  computed: {
    schoolGPAs: function () {
      return null
    }
  }
}
</script>

<style>

</style>