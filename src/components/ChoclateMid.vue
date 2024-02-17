<!--<script setup>-->

<!--</script>-->

<!--<template>-->
<!--  <div class="container-fluid">-->
<!--    <div class="row">-->
<!--      <div class="col-md-12">-->
<!--        <video autoplay muted loop id="myVideo">-->
<!--          <source src="../assets/Home/videoplayback.mp4" type="video/mp4">-->
<!--        </video>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--#myVideo {-->
<!--  width: 100vw;-->
<!--  background-position: center;-->
<!--  height: 500px;-->
<!--  object-fit: cover;-->
<!--  margin-left: -12px;-->

<!--  min-height: 500px;-->

<!--  /* Create the parallax scrolling effect */-->
<!--  background-attachment: fixed;-->

<!--  background-repeat: no-repeat;-->
<!--  background-size: cover;-->
<!--}-->

<!--@media screen and (min-width: 768px) {-->
<!--  #myVideo {-->
<!--    max-height: 600px; /* Новая максимальная высота для широких экранов */-->
<!--  }-->
<!--}-->

<!--</style>-->

<script setup>

</script>

<template>
  <div class="ParallaxVideo">
    <video autoplay muted loop>
      <source src="../assets/Home/videoplayback.mp4" type="video/mp4">
    </video>
  </div>
</template>

<style scoped>
.ParallaxVideo {
  height: 600px;
  padding-bottom: 50px;
  padding-top: 50px;

}

.ParallaxVideo video {
  min-width: 100%;
  position: fixed;
  top: 0;
  z-index: -999;
  object-fit: cover;

}

video {
  width: 100vw;
  background-position: center;
  object-fit: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

}


</style>

