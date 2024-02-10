<template>

  <nav class="navbar navbar-expand-md bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <div class="navbar-header"><a href="" class="navbar-brand">SANYA</a></div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/menu">Меню</router-link>
          </li>
          <li class="nav-item nav-link" @click.prevent="scrollToFooter">Контакты</li>
        </ul>
      </div>
      <div class="navbar-right">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="https://www.instagram.com/cerfus_88/" target="_blank">
              <img src="../assets/Home/insta-logo.png" alt="Instagram Логотип">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://vk.com/cerfus_88" target="_blank">
              <img src="../assets/Home/vk-logo.png" alt="VK Логотип">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://t.me/Cerfus29" target="_blank">
              <img src="../assets/Home/tg-logo.png" alt="ТГ Логотип">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script setup>
const scrollToFooter = () => {
  const footer = document.getElementById('footer');
  if (footer) {
    footer.scrollIntoView({behavior: 'smooth'});
  }
};
</script>

<style scoped>
.navbar {
  background-color: #fa9999;
}

.navbar-nav li {
  margin-right: 20px;
  transition: color 0.3s, transform 0.3s;
  cursor: pointer !important;
}

.navbar-nav li:last-child {
  margin-right: 0;
}

.navbar-nav li:hover {
  transform: scale(1.1);
}

.navbar-nav img {
  height: 25px;
  margin-left: -15px;
  transition: color 0.3s, transform 0.3s;
}

</style>