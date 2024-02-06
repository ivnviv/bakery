<template>
  <nav class="top-menu">
    <div class="left-menu">
      <ul>
        <li><a href="#"><router-link to="/">Главная</router-link></a></li>
        <li><a href="#"><router-link to="/menu">Меню</router-link></a></li>
        <li><a @click.prevent="scrollToFooter">Контакты</a></li>
      </ul>
    </div>
    <div class="right-menu">
      <ul>
        <li>
          <a href="https://www.instagram.com/cerfus_88/" target="_blank">
            <img src="../assets/Home/insta-logo.png" alt="Instagram Логотип">
          </a>
        </li>
        <li>
          <a href="https://vk.com/cerfus_88" target="_blank">
            <img src="../assets/Home/vk-logo.png" alt="VK Логотип">
          </a>
        </li>
        <li>
          <a href="https://t.me/Cerfus29" target="_blank">
            <img src="../assets/Home/tg-logo.png" alt="ТГ Логотип">
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script setup>
const scrollToFooter = () => {
  const footer = document.getElementById('footer');
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.top-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(120, 122, 111, 0.4);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.left-menu {
  margin-left: 50px;
  margin-right: 20px;
}

.left-menu li {
  margin-left: 50px;
  margin-right: 20px;
  transition: color 0.3s, transform 0.3s;
}
.left-menu li:hover {
  transform: scale(1.1);
}
.left-menu,
.right-menu {
  display: flex;
  align-items: center;
}

.left-menu ul,
.right-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.left-menu a,
.right-menu a {
  text-decoration: none;
  color: #fdfdfd;
  font-size: 18px;
  margin-right: 20px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;
}

.left-menu a:hover,
.right-menu a:hover {
  color: #efebeb;
}

.top-menu img {
  height: 25px;
  margin-left: -15px;
  transition: color 0.3s, transform 0.3s;
}
.top-menu img:hover {
  transform: scale(1.2);
}

</style>