<template>
  <ul class="sticky h-full top-0 hidden md:flex flex-col py-32 ml-8 mr-8 overflow-x-hidden w-64">
      <a href="#previous-schools" ><h3 class="text-gray-700 font-semibold">Previous Schools</h3></a>
      <li class="py-2" v-for="prevSchool in prevSchools" :key="prevSchool.id">
          <ul class="pl-4">
              <li><a v-bind:href="prevSchool.id" class="text-gray-600">{{ prevSchool.name }}</a></li>
          </ul>
      </li>
      <a class="mt-4" href="#future-schools" ><h3 class="text-gray-700 font-semibold">Medical Schools</h3></a>
      <li class="py-2" v-for="futureSchool in futureSchools" :key="futureSchool.id">
          <ul class="pl-4">
              <li><a v-bind:href="futureSchool.id" class="text-gray-600">{{ futureSchool.name }}</a></li>
          </ul>
      </li>
      <h3 class="mt-4 text-gray-700 font-semibold">OMSAS cGPA</h3>
      <p class="mt-2 pl-4 text-green-500">---</p>
  </ul>
</template>

<script>
import { UniList, medSchools } from '../data/uniGPA'
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
        futureSchools: function() {
            return Object.values(medSchools).map(school => ({
                id: `#future-${school.id}`,
                name: school.name,
                shortName: school.shortName
            }))
        }
    }
}
</script>

<style>

</style>