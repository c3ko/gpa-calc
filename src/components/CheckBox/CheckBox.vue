<template>
  <label class="custom-label flex">
      <div class="bg-white rounded shadow w-5 h-5 flex border border-gray-400 justify-center items-center">
        <input type="checkbox" class="hidden" checked>
        <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
      </div>
    </label>
</template>

<script>
export default {
  name: 'CheckBox',
  props: ['courseID'],

  methods: {
    setCourseChecked: function() {

    },
    setAllCoursesChecked() {

    }
  },

  computed: {
    isChecked: function (){
      return false;
    }
  }
}
</script>

<style>
    .custom-label input:checked + svg {
        display: block !important;
    }
</style>