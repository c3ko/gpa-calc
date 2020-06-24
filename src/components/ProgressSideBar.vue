<template>
  <ul class="sticky  h-full top-0 hidden md:flex flex-col py-32 ml-8 mr-8 overflow-x-hidden">
      <li class="py-2" v-for="item in list" :key="item">
          <a href="#"><h3 class="text-gray-700 font-semibold">{{ item }}</h3></a>
          <ul class="pl-4">
              <a class="text-gray-600" href="#">University of Toronto</a>
          </ul>
      </li>
  </ul>
</template>

<script>
//import { onVisibilityChange } from '../lib/helpers'

export default {
    name: 'ProgressSideBar',
    data () {
        return {
            list: ['Previous Schools', 'Future Schools', 'Three', 'Four']
        }
    },
    created: function () {

    },
    mounted: function() {

        document.addEventListener('scroll', function () {
            let previousOffset = document.getElementById('previous-heading').getBoundingClientRect()
            let futureOffset = document.getElementById('future-heading').getBoundingClientRect()

        })
    },

    methods: {

        scrollToElement: function (id) {
            var el = document.getElementById(id)
            el.scrollIntoView()
        }
    },

    computed: {

    }
}
</script>

<style>

</style>