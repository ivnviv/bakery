<script setup>
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="main-picture">
          <div class="bakery-title">
            <div class="bakery-type">- ТОРТИКОВОЕ ЦАРСТВО1 -</div>
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
  background-size: cover;
  background-position: center;
  height: 655px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bakery-title {
  text-align: center;
  color: white;
  transition: color 0.3s, transform 0.3s;
  font-family: 'Indie+Flower', cursive;
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
