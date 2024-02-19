<template>
  <div class="main-container">
    <Header></Header>
    <LogoPart></LogoPart>
    <AboutMe></AboutMe>
    <Galery></Galery>
    <ChoclateMid></ChoclateMid>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {Footer, Header}
}
</script>

<style scoped>
.main-container {

}
</style>






