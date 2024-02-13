<template>
  <footer id="footer" class="footer">
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
            <input v-model="senderName" @input="checkName" type="text" id="name" name="name" required
                   placeholder="Ваше Имя">
            <p class="error">{{ errors.name }}</p>
            <input v-model="emailAddress" @input="checkEmail" type="email" id="email" name="email" required
                   placeholder="example@mail.com">
            <p class="error">{{ errors.email }}</p>
            <div class="input-group">
              <span class="input-group-addon"><span>+7</span></span>
              <input
                  type="tel"
                  v-model="phone"
                  name="phone"
                  id="phone"
                  placeholder="(921) 111-1111"
                  autocomplete="tel"
                  maxlength="14"
                  class="form-control"
                  v-phone
                  pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
                  required
              />
            </div>
<!--            <input v-model="phoneNumber" @input="handleInput"  maxlength="19" type="tel" id="tel" name="tel" required placeholder="+7 (___) ___-__-__" >-->
<!--            <p class="error">{{ errors.phone }}</p>-->
            <p>{{ phoneNumber }}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="message">
            <textarea v-model="messageText" id="message" name="message" required
                      placeholder="Ваше сообщение"></textarea>
            <p>{{ messageText }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <button type="button">Отправить</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      senderName: '',
      emailAddress: '',
      phoneNumber: '',
      messageText: '',
      errors: {
        name: '', // Ошибка для имени
        email: '', // Ошибка для электронной почты
        phone: '',
        countryCode: '+7',
      },
    };
  },
  methods: {
    checkName() {
      // Проверка на пустое имя
      if (!this.senderName.trim()) {
        this.errors.name = 'Имя не может быть пустым';
      } else if (!/^[a-zA-Zа-яА-ЯЁё]+$/.test(this.senderName)) {
        // Проверка на наличие только букв в имени
        this.errors.name = 'Имя должно содержать только буквы';
      } else {
        this.errors.name = ''; // Очищаем ошибку, если все условия выполнены
      }
    },
    checkEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!this.emailAddress.trim()) {
        this.errors.email = 'Email не может быть пустым';
      } else if (!emailRegex.test(this.emailAddress.trim())) {
        this.errors.email = 'Введи действительный емейл';
      } else {
        this.errors.email = ''; // Очищаем ошибку, если все условия выполнены
      }
    },
handleInput() {
      this.handlePhoneNumberInput();
      this.checkPhoneNumber()
},

    checkPhoneNumber() {
      const phoneRegex = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;

      if (!this.phoneNumber.trim()) {
        this.errors.phone = 'Номер телефона не может быть пустым';
      } else if (!phoneRegex.test(this.phoneNumber.trim())) {
        this.errors.phone = 'Введи действительный российский номер телефона (например, +7 (123) 456-78-90)';
      } else {
        this.errors.phone = ''; // Очищаем ошибку, если все условия выполнены
      }
    },
    handlePhoneNumberInput() {
      // При вводе символов, автоматически добавляйте код страны
      if (!this.phoneNumber.startsWith('+') || !this.phoneNumber.startsWith('+7')) {
        this.phoneNumber = '+7' + this.phoneNumber;
      }
    },
  },
};
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

/* Добавленные стили для адаптации на маленьких экранах */
.contact-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Изменено для занимания всей ширины на маленьких экранах */
  margin: 0 auto;
}

input,
textarea {
  width: 100%; /* Изменено для занимания всей ширины на маленьких экранах */
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 15px;
}

button {
  width: 50%; /* Изменено для занимания половины ширины на маленьких экранах */
  margin-top: 10px; /* Добавленный стиль для отступа от предыдущего элемента */
  background-color: #e3853a;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 15px;
  display: block;
}
button:hover {
  background-color: #1c1c1b;
}


/* Медиа-запрос для установки стилей на маленьких экранах */
@media screen and (max-width: 600px) {
  .contact-data {
    width: 90%; /* Изменено для занимания 90% ширины на очень маленьких экранах */
  }

  button {
    width: 100%; /* Изменено для занимания всей ширины на маленьких экранах */
  }
}
</style>
