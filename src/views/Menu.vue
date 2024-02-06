<template>
  <div class="main-container">
    <Header></Header>
    <ChoclateMid></ChoclateMid>
    <Footer></Footer>

  </div>



</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ChoclateMid from "@/components/ChoclateMid.vue";
export default {
  components: {Header, ChoclateMid, Footer}
}
</script>

<style scoped>
.main-container {

}
</style>






