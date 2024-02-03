<template>
 <div class="main-container">
   <Header></Header>
   <LogoPart></LogoPart>
   <AboutMe></AboutMe>
   <ChoclateMid></ChoclateMid>
   <Footer></Footer>

 </div>


</template>

<script>
import LogoPart from "@/components/LogoPart.vue";
import Header from "@/components/Header.vue";
import AboutMe from "@/components/AboutMe.vue";
import Footer from "@/components/Footer.vue";
import ChoclateMid from "@/components/ChoclateMid.vue";
export default {
  components: {ChoclateMid, Footer, AboutMe, LogoPart, Header}
}
</script>

<style scoped>
.main-container {

}
</style>
