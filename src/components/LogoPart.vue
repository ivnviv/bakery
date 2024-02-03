<script setup>

</script>

<template>
  <div class="main-picture">
    <div class="bakery-title">
      <div class="bakery-type">- ТОРТИКОВОЕ ЦАРСТВО1 -</div>
      <div class="bakery-name">SANYA-BAKERY</div>
    </div>
  </div>
</template>

<style scoped>
.main-picture {
  background-image: url("src/assets/mainPicture.jpg");
  background-size: cover;
  background-position: center;
  height: 655px;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
.bakery-title {
  text-align: center;
  color: white;
  transition: color 0.3s, transform 0.3s;
}
.bakery-title:hover {
  color: #ec7b21;
  transform: scale(1.1) translateY(-15px);
}

.bakery-name {
  font-size: 110px;
}
.bakery-type {
  font-size: 18px;
}
</style>