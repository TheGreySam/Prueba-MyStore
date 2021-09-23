<template>
  <div id="app">
    <Navbar />
    
    <transition name="vista" >
      <router-view class="bgpizza p-3"></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from './components/Footer.vue'

export default {
  components: {Navbar, Footer},
  name: "App"
}
</script>

<style scoped>
.bgpizza {
  background-color: rgb(228, 194, 0);
} 
.navpizza {
  background-color: rgb(175, 35, 0);
} 
.logopizza {
  color:rgb(9, 104, 21)
}
.footer {
  position:fixed;
  bottom:0;
  color:snow;
  width: 100%
}

.vista-enter-active, .vista-leave-active {
    transition: opacity .5s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
