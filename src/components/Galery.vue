<!--<template>-->
<!--  <div class="container-fluid">-->
<!--    <div class="row">-->
<!--      <div class="col-md-12">-->
<!--        <div class="gallery">-->
<!--          <h2>Мои работы</h2>-->
<!--          <div v-for="(image, index) in images" :key="index" class="gallery-item">-->
<!--            <img :src="image.src" :alt="image.alt" @click="openImage(image.src, image.alt)">-->
<!--          </div>-->
<!--          <div v-if="showModal" class="modal">-->
<!--            <div class="modal-content">-->
<!--              <span class="close" @click="closeModal">&times;</span>-->
<!--              <img :src="selectedImage.src" :alt="selectedImage.alt">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      images: [-->
<!--        {src: 'src/assets/Home/Galery/1.png', alt: 'Description 2'},-->
<!--        {src: 'src/assets/Home/Galery/3.png', alt: 'Description 2'},-->
<!--        {src: 'src/assets/Home/Galery/4.png', alt: 'Description 2'},-->
<!--        {src: 'src/assets/Home/Galery/5.png', alt: 'Description 2'},-->
<!--        {src: 'src/assets/Home/Galery/6.png', alt: 'Description 2'},-->
<!--        {src: 'src/assets/Home/Galery/7.png', alt: 'Description 2'},-->
<!--        // {src: 'src/assets/Home/Galery/8.png', alt: 'Description 2'},-->
<!--        // Add more images as needed-->
<!--      ],-->
<!--      showModal: false,-->
<!--      selectedImage: {},-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    openImage(src, alt) {-->
<!--      this.selectedImage = {src, alt};-->
<!--      this.showModal = true;-->
<!--    },-->
<!--    closeModal() {-->
<!--      this.showModal = false;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.gallery {-->
<!--  display: flex;-->
<!--  flex-wrap: wrap;-->
<!--  justify-content: center;-->
<!--  text-align: center;-->
<!--  margin-left: 10px; /* Уменьшен отступ для маленьких экранов */-->
<!--}-->

<!--h2 {-->
<!--  width: 100%;-->
<!--  margin-bottom: 20px;-->
<!--  font-size: 20px; /* Увеличен размер шрифта для маленьких экранов */-->
<!--}-->

<!--.gallery-item {-->
<!--  margin: 5px;-->
<!--  cursor: pointer;-->
<!--  flex: 0 0 calc(15% - 10px); /* Изменено на flex для управления шириной */-->
<!--}-->

<!--img {-->
<!--  width: 100%;-->
<!--  height: auto;-->
<!--}-->

<!--.modal {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  position: fixed;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  background-color: rgba(0, 0, 0, 0.7);-->
<!--  z-index: 1;-->
<!--}-->

<!--.modal-content {-->
<!--  position: relative;-->
<!--  padding: 20px;-->
<!--  background-color: #fefefe;-->
<!--  max-width: 90%;-->
<!--  max-height: 80%;-->
<!--  overflow: auto;-->
<!--}-->

<!--.close {-->
<!--  position: absolute;-->
<!--  top: -6px;-->
<!--  right: 0;-->
<!--  font-size: 25px;-->
<!--  color: #000000;-->
<!--  cursor: pointer;-->
<!--}-->
<!--</style>-->


<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/Home/Galery/10.png" class="d-block w-100" alt="...">
          </div>
          <div class="col-md-6 item-description">
            <p>С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании форм развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании новых предложений. С другой стороны сложившаяся структура организации в значительной степени обуславливает создание систем массового участия. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий играет важную роль в формировании существенных финансовых и административных условий.</p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/Home/Galery/3.png" class="d-block w-100" alt="...">
          </div>
          <div class="col-md-6 item-description">
            <p>С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании форм развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании новых предложений. С другой стороны сложившаяся структура организации в значительной степени обуславливает создание систем массового участия. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий играет важную роль в формировании существенных финансовых и административных условий.</p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/Home/Galery/8.png" class="d-block w-100" alt="...">
          </div>
          <div class="col-md-6 item-description">
            <p>С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании форм развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании новых предложений. С другой стороны сложившаяся структура организации в значительной степени обуславливает создание систем массового участия. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий играет важную роль в формировании существенных финансовых и административных условий.</p>
          </div>
        </div>
      </div>



    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>

</script>

<style scoped>


.carousel-inner img {
  object-fit: cover;
  vertical-align: middle;
  border-style: none;
  height: 70vh;
  border-radius: 20px;
}

.carousel-inner {
  background: #fcf3ea;

}

.carousel-item {
  padding: 30px;
}

button {
  color: #464545;
}

.item-description {
  font-size: 15px;
  color: #464545;
  font-family: 'Indie+Flower', cursive;
  padding: 50px;
  text-align: justify;
}

</style>


