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
            <input
                v-model="senderName"
                @input="checkName"
                type="text"
                id="name"
                name="name"
                required
                placeholder="Ваше Имя">
            <p class="error">{{ errors.name }}</p>
            <input
                v-model="emailAddress"
                @input="checkEmail"
                type="email" id="email"
                name="email" required
                placeholder="example@mail.com">
            <p class="error">{{ errors.email }}</p>
            <input
                type="tel"
                v-model="phoneNumber"
                name="phone"
                id="phone"
                placeholder="+7(...)..-..-.."
                maxlength="12"
                pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
                required
                @input="checkPhone"
            />
            <p class="error">{{ errors.phone }}</p>
            <input-mask v-model="phoneNumber" mask="##-##" placeholder="Enter value" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="message">
            <textarea
                v-model="messageText"
                id="message"
                name="message"
                required
                placeholder="Ваше сообщение"
                maxlength="120">
            </textarea>
          </div>

        </div>
        <div class="row button-container">
          <div class="col-md-4">
          </div>
          <div class="col-md-4">
            <button type="button">Отправить</button>
          </div>
          <div class="col-md-4">
          </div>
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
        name: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {

    checkName() {
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
        this.errors.email = '';
      }
    },
    checkPhone() {
      if (this.phoneNumber.replace(/[^0-9]/g, '').length < 12) {
        this.errors.phone = 'Номер телефона слишком короткий';
      } else {
        this.errors.phone = '';
      }
    }

  },
};
</script>

<style scoped>
.footer {
  background-color: #f7f7f7;
  padding: 20px;
  justify-content: center;
  font-family: 'Indie+Flower', cursive;
}

.contact-info {
  text-align: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 16px;
}

.contact-data {
  flex-direction: column;
  width: 40%;
  margin-left: auto;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 15px;
}

.message {
  width: 50%;
  height: 100%;
}

textarea {
  width: 100%;
  height: 85%;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 8px;
  resize: none;
}


.button-container {
  display: flex;
  justify-content: center;
}

button {
  width: 100%;
  background-color: #e3853a;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 15px;
  margin: 10px auto;
}


button:hover {
  background-color: #1c1c1b;
}

@media screen and (max-width: 600px) {
  .contact-data,
  .message {
    width: 100%;
    margin-top: 10px;
  }

  button {
    margin-top: 20px;
    width: 110%;
  }
}
</style>
