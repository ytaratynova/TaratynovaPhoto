<template>
  <div class="about">
    <div class="about__content">
      <div class="about__description">
        Детский и семейный фотограф
        <h2 class="title">Юлия Таратынова</h2>
        Основные направления работы: детская и семейная съемка, женский
        портрет<br />
      </div>
      <div class="about__text">
        /Достижения/<br />
        <ul>
          <li>TOP100 BICFP 2021</li>
          <li>TOP35 лучших детских серий 35awards2020</li>
          <li>TOP 100 BICFP 2018</li>
          <li>TOP 35 best children photo photographer 35awards 2017</li>
          <li>TOP 35 best children portrait single photo</li>
          <li>TOP 10 best children photo series 35awards2016</li>
        </ul>
        /Выставки/
        <ul>
          <li>"Детство в кадре" ТРЦ "Афимолл Сити"</li>
        </ul>
        /Публикации/
        <ul>
          <li>Обложка журнала "Славянка" январь-февраль 2021</li>
          <li>Настенный календарь типографии "АВИСС" на 2018 год</li>
          <li>Электронный журнал FAIRYTALE №2, рубрика "Любимые фотографы"</li>
        </ul>
      </div>
      <ButtonComp :value="'Написать'" :category="'mailMe'" />
    </div>
  </div>
</template>

<script>
import ButtonComp from "./ButtonComp.vue";

export default {
  name: "AboutComp",
  components: {
    ButtonComp,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.about {
  /* height: 100vh; */

  min-height: 100vh;
  background-image: url("@/assets/about.jpg");
  background-size: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  padding-left: calc(100vw / 6);
  /* overflow-y: scroll; */
}
.about__content {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 60px;
  margin-top: 120px;
  margin-bottom: 100px;
  /* overflow-y: scroll; */
  align-content: flex-start;
}
.about__description {
  /* margin-top: 100px; */
  text-align: left;
  font-size: 20px;
}
.about__text {
  text-align: left;
}

@media screen and (max-width: 678px) and (min-width: 320px) {
  .about__description {
    text-align: center;
    font-size: 15px;
  }
  .about__text {
    font-size: 12px;
  }
}
</style>