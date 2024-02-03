<template>
  <footer class="footer">

    <div class="call-back-form" id="footer">
      <h3>Свяжитесь со мной:</h3>
      <div class="contact-info">
        <p>Email: zakbraff@mail.ru / Телефон: +7 (921) 632-00-18</p>
      </div>
      <form>
        <div class="contact-data">
          <input type="text" id="name" name="name" required placeholder="Имя">
          <input type="email" id="email" name="phone" required placeholder="Эл. почта">
          <input type="tel" id="tel" name="phone" required placeholder="Телефон">
        </div>
        <div class="message">
          <textarea id="message" name="message" required placeholder="Добавьте сообщение"></textarea>
        </div>
        <button type="submit">Отправить</button>
      </form>
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
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ddd;
  font-family: 'Indie+Flower', cursive;
  width: 100vw;
}

.contact-info,
.call-back-form {
  text-align: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 12px;
}

form {
  display: flex;
  flex-direction: column;

}

label {
  margin-bottom: 5px;

}

input {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 15px;
}

textarea {
  width: 97%;
  height: 100px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 8px;
}


button {
  background-color: #e3853a;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 15px;
}

button:hover {
  background-color: #1c1c1b;
}
</style>
