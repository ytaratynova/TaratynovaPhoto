<template>
  <div class="contacts">
    <div class="contacts__content">
      <div class="contacts__text">
        <p class="contacts__subtitle">Я верю в общение</p>
        <p class="contacts__description">
          В настоящее время я живу в Москве. Но я всегда открыта новым
          предложениям и неожиданным путешествиям. Если у вас есть идея по
          фотосъемке — пишите мне. Я буду рада воплотить самую сумасшедшую
          фотоидею.
        </p>
      </div>
      <FormComp />
    </div>
  </div>
</template>

<script>
import FormComp from "./FormComp.vue";

export default {
  name: "ContactsComp",
  components: {
    FormComp,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.contacts {
  min-height: 100vh;
  background-image: url("@/assets/contacts.jpg");
  background-size: no-repeat;
  background-position: center;
  background-size: cover;
}

.contacts__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
}
.contacts__text {
  max-width: 420px;
  margin-top: 150px;
}
.contacts__subtitle {
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 30px;
}
.contacts__description {
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-align: start;
  padding-left: 15px;
}

@media screen and (max-width: 1024px) and (min-width: 679px) {
  .contacts__content {
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: center;
  }
  .contacts__text {
    margin-top: 60px;
  }
  .contacts__subtitle {
    font-size: 28px;
  }
  .contacts__description {
    font-size: 16px;
  }
}
@media screen and (max-width: 678px) and (min-width: 320px) {
  .contacts__content {
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: center;
  }
  .contacts__text {
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
  }
  .contacts__subtitle {
    font-size: 24px;
  }
  .contacts__description {
    font-size: 12px;
  }
}
</style>