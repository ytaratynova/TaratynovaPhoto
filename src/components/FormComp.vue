<template>
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    class="contact__form"
  >
    <input
      type="hidden"
      name="access_key"
      value="7981c77a-f613-4d3c-8a2f-2980beb94107"
    />
    <div class="form-contacts">
      <input
        type="text"
        placeholder="Ваше Имя*"
        name="name"
        class="form__input"
        id="formName"
        required
      />
      <input
        type="email"
        placeholder="Ваш E-mail*"
        name="email"
        class="form__input"
        id="formEmail"
        required
      />
    </div>
    <input
      type="text"
      name="theme"
      placeholder="Тема: Фотосессия"
      class="theme form__input"
      id="formTheme"
    />
    <textarea
      class="yourText form__input"
      name="message"
      id="formMessage"
      placeholder="Здравствуйте, Юлия! Мне хотелось бы хотелось заказать у вас фотосессию..."
      required
    />
    <div class="form-checkbox">
      <input
        type="checkbox"
        checked
        name="agreement"
        class="checkbox__input"
        v-model="agreement"
        v-bind:true-value="on"
        v-bind:false-value="off"
        id="forAgreement"
      />
      <label for="forAgreement" class="checkbox__label"
        ><span
          >Я даю свое согласие на обработку персональных данных</span
        ></label
      >
    </div>

    <button v-if="agreement === on" class="form__button" type="submit">
      <span>Отправить</span>
    </button>
  </form>
</template>

<script>
export default {
  name: "FormComp",

  data() {
    return {
      on: true,
      off: false,
      agreement: true,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.contact__form {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 50vw;
  padding: 0 50px;
}
.form-contacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form__input {
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  width: 100%;
  padding: 0 10px;
  height: 50px;
  font-family: Montserrat, sans-serif;
  font-size: 20px;

  color: aliceblue;
}
.form__input:hover {
  box-shadow: 0 0px 5px #888888;
}
.checkbox__label span {
  font-size: 14px;
  color: rgba(204, 204, 204, 1);
}

.yourText {
  height: 200px;
  text-align: start;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  color: aliceblue;
  resize: vertical;
}

.form__button {
  margin-top: 100px;
  display: flex;
  position: relative;
  /* padding: 5px 10px; */
  width: 150px;
  color: white;
  /* transition: transform 0.5s easy; */
  font-size: 20px;
  align-self: center;
}

.form__button::before,
.form__button::after {
  content: "";
  position: absolute;
  height: 15px;
  width: 1px;
  background-color: white;
}

.form__button span::before,
.form__button span::after {
  content: "";
  position: absolute;
  height: 1px;
  width: 15px;
  background-color: white;
}
.form__button::before,
.form__button span::before {
  top: -15px;
  left: -20px;
}
.form__button::after,
.form__button span::after {
  bottom: -10px;
  right: -5px;
}
span {
  font-size: 20px;
  padding: 10px 10px;
}

.form__button:hover {
  text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
    0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(191, 226, 255, 0.52),
    0 0 21px rgba(191, 226, 255, 0.92), 0 0 34px rgba(191, 226, 255, 0.78),
    0 0 54px rgba(191, 226, 255, 0.92);
}
button {
  background: none;
  border: 0ch;
  outline: none;
}
@media screen and (max-width: 678px) and (min-width: 320px) {
  .contact__form {
    min-width: 300px;
  }
}
</style>