<template>
  <div id="app">
    
    
    <navbar :brand="'My Store'"/>
    <transition name="vista">
      <router-view/>
      </transition>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: "App",
  components: {
    Navbar,
  },
}
</script>


<style>
.vista-enter-active, .vista-leave-active {
    transition: opacity .5s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
