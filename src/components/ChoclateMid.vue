<script setup>

</script>

<template>
    <video autoplay muted loop id="myVideo">
      <source src="@/assets/videoplayback.mp4" type="video/mp4">
    </video>
</template>

<style scoped>
#myVideo {
  width: 100vw;
  background-size: cover;
  background-position: center;
  height: 500px;  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -10px;
}
</style>