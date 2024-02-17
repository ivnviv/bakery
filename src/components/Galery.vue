<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button v-for="(slide, index) in slides" :key="index" type="button"
              :data-bs-target="'#carouselExampleCaptions'" :data-bs-slide-to="index"
              :class="{ 'active': index === 0 }" aria-current="true" :aria-label="'Slide ' + (index + 1)"></button>
    </div>
    <div class="carousel-inner">
      <div v-for="(slide, index) in slides" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
        <div class="row">
          <div class="col-md-6">
            <img :src="slide.image" class="d-block w-100" alt="...">
          </div>
          <div class="col-md-6 item-description">
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleCaptions'"
            data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleCaptions'"
            data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import {carouselData} from "../components/carouselData.js";

export default {
  data() {
    return {
      slides: carouselData,
    };
  },
};
</script>

<style scoped>


.carousel-inner img {
  object-fit: cover;
  vertical-align: middle;
  border-style: none;
  height: 70vh;
  border-radius: 20px;
}

.carousel {
  background: #faf7f3;

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


.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(50%);
}


</style>



