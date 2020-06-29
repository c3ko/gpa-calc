<template>
  <header>
    <nav class="navbar">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img class="h-8 w-8 mr-2" src="/img/calc_2.png" alt="Getting.In"/>
          <p class="text-blue-300 md:text-3xl sm:text-md uppercase tracking-tight font-bold">Getting.In</p>
        </div>
        <div class="block md:hidden ">
            <button 
                v-on:click="toggleMenu"
                class="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:font-semibold hover:text-blue-400 hover:border-blue-700 hover:border-4">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow md:flex md:items-center md:w-auto"
            v-bind:class="{ hidden: isHidden }"
        >
            <div class="text-sm md:flex-grow">
                <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-blue-500 hover:text-white mr-4">
                    New Features
                </a>
                <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-blue-500 hover:text-white mr-4">
                    How It Works
                </a>
                <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-blue-500 hover:text-white">
                    Blog
                </a>
            </div>
            <div class="flex flex-col md:flex-row">
                <button class="hidden md:block btn btn-outline mr-4">Save</button>
                <button class="hidden md:block btn btn-blue mr-4">Account</button>
            </div>
        </div>
    </nav>

  </header>

</template>

<script>
export default {
    name: 'NavBar',
    data(){
        return {
            isHidden: true
        }
    },
    methods: {
        toggleMenu: function () {
            this.isHidden = !this.isHidden
        }
    }

}
</script>

<style>

 .navbar {
     @apply flex items-center h-24 bg-gray-100 justify-between flex-wrap p-6 border-b border-gray-300 mt-0 fixed w-full z-10 top-0;
     
 }
  .btn {
    @apply font-semibold py-2 px-6 rounded;
  }
  .btn-blue {
    @apply bg-blue-400 text-white;
  }

  .btn-outline {
      @apply bg-transparent text-blue-700 border border-blue-500;
  }
  .btn-outline:hover {
      @apply text-white border-transparent bg-blue-700 rounded;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }

  .btn-disabled {
      @apply text-gray-500 border-transparent bg-transparent;
  }
</style>