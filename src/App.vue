<template>
  <div class="main-container">

    <router-view></router-view>
  </div>


</template>

<script>
import LogoPart from "@/components/LogoPart.vue";
import Header from "@/components/Header.vue";
import AboutMe from "@/components/AboutMe.vue";
import Footer from "@/components/Footer.vue";
import ChoclateMid from "@/components/ChoclateMid.vue";
import Galery from "@/components/Galery.vue";
import Home from "@/views/Home.vue";
import Menu from "@/views/Menu.vue";
// import router from "@/router/index.js";

export default {
  components: {Menu, Home, ChoclateMid, Footer, AboutMe, LogoPart, Header, Galery}
}
</script>

<style scoped>
.main-container {

}
</style>






