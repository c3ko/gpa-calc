<template>
  <ul class="sticky  h-full top-0 hidden md:flex flex-col py-32 ml-8 mr-8 overflow-x-hidden">
      <a href="#previous-schools" ><h3 class="text-gray-700 font-semibold">Previous Schools</h3></a>
      <li class="py-2" v-for="prevSchool in prevSchools" :key="prevSchool.id">
          <ul class="pl-4">
              <a v-bind:href="prevSchool.id" class="text-gray-600">{{ prevSchool.name }}</a>
          </ul>
      </li>
      <a href="#future-schools" ><h3 class="text-gray-700 font-semibold">Future Schools</h3></a>

  </ul>
</template>

<script>
//import { onVisibilityChange } from '../lib/helpers'
import { UniList } from '../data/uniGPA'
export default {
    name: 'ProgressSideBar',
    data () {
        return {
            list: ['Previous Schools', 'Future Schools', 'Three', 'Four'],
        }
    },
    created: function () {
        
    },
    mounted: function() {

        document.addEventListener('scroll', function () {
            //let previousOffset = document.getElementById('previous-heading').getBoundingClientRect()
            //let futureOffset = document.getElementById('future-heading').getBoundingClientRect()

        })
    },

    methods: {

        scrollToElement: function (id) {
            var el = document.getElementById(id)
            el.scrollIntoView()
        }
    },

    computed: {
        prevSchools: function () {

            return Object.values(this.$store.state.schoolsAdded).map(school => ({
                id: `#prev-${school.id}`,
                name: UniList[school.OMSASID] ? UniList[school.OMSASID].name : 'School To Be Selected'
            }))
            
        },
        futureScools: function() {
            return null
        }
    }
}
</script>

<style>

</style>