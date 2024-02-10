<script setup>

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <video autoplay muted loop id="myVideo">
          <source src="../assets/Home/videoplayback.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<style scoped>
#myVideo {
  width: 100vw;
  background-position: center;
  height: 500px;
  object-fit: cover;
  margin-top: 50px;
}
</style>