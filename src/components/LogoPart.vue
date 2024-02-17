<script setup>
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="main-picture">
          <div class="bakery-title">
            <div class="bakery-type">- ТОРТИКОВОЕ ЦАРСТВО -</div>
            <div class="bakery-name">SANYA-BAKERY</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-picture {
  background-image: url("../assets/Home/mainPicture.jpg");
  height: 655px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -12px;
  margin-right: -12px;

  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bakery-title {
  text-align: center;
  color: white;
  transition: color 0.3s, transform 0.3s;
  font-family: 'Indie+Flower', cursive;
  user-select:none
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

/* Медиа-запрос для маленьких экранов */
@media (max-width: 767px) {
  .main-picture {
    height: 400px; /* Уменьшаем высоту для маленьких экранов */
  }

  .bakery-name {
    font-size: 70px; /* Уменьшаем размер шрифта для маленьких экранов */
  }

  .bakery-type {
    font-size: 14px; /* Уменьшаем размер шрифта для маленьких экранов */
  }
}
</style>



<!--<script setup>-->
<!--</script>-->

<!--<template>-->
<!--  <div class="container-fluid">-->
<!--    <div class="row">-->
<!--      <div class="col-md-12">-->
<!--        <div class="main-picture">-->
<!--          <div class="bakery-title">-->
<!--            <div class="bakery-type">- ТОРТИКОВОЕ ЦАРСТВО -</div>-->
<!--            <div class="bakery-name">SANYA-BAKERY</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--html {-->
<!--  height: 100%;-->
<!--  overflow: hidden;-->
<!--}-->
<!--body {-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--  perspective: 1px;-->
<!--  transform-style: preserve-3d;-->
<!--  overflow-y: scroll;-->
<!--  overflow-x: hidden;-->
<!--  font-family: 'Amatic SC', cursive;-->
<!--  color: #fff;-->
<!--}-->
<!--.container-fluid {-->
<!--  box-sizing: border-box;-->
<!--  min-height: 100vh;-->
<!--  text-align: center;-->
<!--  padding-top: 20%;-->
<!--  transform-style: inherit;-->
<!--  width: 100vw;-->
<!--}-->
<!--.container-fluid::before {-->
<!--  content: '';-->
<!--  display: block;-->
<!--  position: absolute;-->
<!--  left: 0;-->
<!--  right: 0;-->
<!--  bottom: 0;-->
<!--  top: 0;-->
<!--  z-index: -1;-->
<!--  transform-origin: center;-->
<!--  min-height: 100vh;-->
<!--  background-image: url('../assets/Home/mainPicture.jpg');-->
<!--  background-repeat: no-repeat;-->
<!--  background-size: cover;-->
<!--  transition: 1s;-->
<!--  /* Параллакс */-->
<!--  transform: translateZ(-1px) scale(2);-->
<!--}-->

<!--.bakery-title {-->
<!--  margin-top: -100px;-->
<!--  font-size: 42px;-->
<!--}-->

<!--</style>-->