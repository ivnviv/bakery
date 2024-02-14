<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="gallery">
          <h2>Мои работы</h2>
          <div v-for="(image, index) in images" :key="index" class="gallery-item">
            <img :src="image.src" :alt="image.alt" @click="openImage(image.src, image.alt)">
          </div>
          <div v-if="showModal" class="modal">
            <div class="modal-content">
              <span class="close" @click="closeModal">&times;</span>
              <img :src="selectedImage.src" :alt="selectedImage.alt">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {src: 'src/assets/Home/Galery/1.png', alt: 'Description 2'},
        {src: 'src/assets/Home/Galery/3.png', alt: 'Description 2'},
        {src: 'src/assets/Home/Galery/4.png', alt: 'Description 2'},
        {src: 'src/assets/Home/Galery/5.png', alt: 'Description 2'},
        {src: 'src/assets/Home/Galery/6.png', alt: 'Description 2'},
        {src: 'src/assets/Home/Galery/7.png', alt: 'Description 2'},
        // {src: 'src/assets/Home/Galery/8.png', alt: 'Description 2'},
        // Add more images as needed
      ],
      showModal: false,
      selectedImage: {},
    };
  },
  methods: {
    openImage(src, alt) {
      this.selectedImage = {src, alt};
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-left: 10px; /* Уменьшен отступ для маленьких экранов */
}

h2 {
  width: 100%;
  margin-bottom: 20px;
  font-size: 20px; /* Увеличен размер шрифта для маленьких экранов */
}

.gallery-item {
  margin: 5px;
  cursor: pointer;
  flex: 0 0 calc(15% - 10px); /* Изменено на flex для управления шириной */
}

img {
  width: 100%;
  height: auto;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.modal-content {
  position: relative;
  padding: 20px;
  background-color: #fefefe;
  max-width: 90%;
  max-height: 80%;
  overflow: auto;
}

.close {
  position: absolute;
  top: -6px;
  right: 0;
  font-size: 25px;
  color: #000000;
  cursor: pointer;
}
</style>
