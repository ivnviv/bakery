<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="call-back-form">
            <div class="contact-info">
              <h3>Свяжитесь со мной:</h3>
              <p>Email: zakbraff@mail.ru / Телефон: +7 (921) 632-00-18</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="contact-data">
            <input type="text" id="name" name="name" required placeholder="Ваше Имя">

            <input type="email" id="email" name="email" required placeholder="example@mail.com">

            <input type="tel" id="tel" name="tel" required placeholder="+7 (___) ___-__-__">
          </div>
        </div>
        <div class="col-md-6">
          <div class="message">
            <textarea id="message" name="message" required placeholder="Ваше сообщение"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <button type="submit">Отправить</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  background-color: #f7f7f7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Indie+Flower', cursive;
  width: 100vw;
}

.contact-info {
  text-align: center;
  margin-bottom: 20px;

}

.contact-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-left: 400px;
}


input,
textarea {
  width: 70%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 15px;
}
textarea {
  height: 150px;
}

button {
  background-color: #e3853a;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 15px;
  display: block;
  margin: 0 auto; /* Добавленный стиль для центрирования по горизонтали */
}

button:hover {
  background-color: #1c1c1b;
}
</style>
