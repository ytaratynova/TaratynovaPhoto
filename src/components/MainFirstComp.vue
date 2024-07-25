<template>
  <div class="home__first-screen" id="0">
    <div class="first-screen__content">
      <div class="first-screen__content_text">
        <p class="first-screen__description">Семейный и детский фотограф</p>
        <h1 class="title">ЮЛИЯ ТАРАТЫНОВА</h1>
      </div>

      <ButtonComp :value="'Познакомиться'" :category="'about'" />
    </div>
  </div>
</template>

<script>
import ButtonComp from "./ButtonComp.vue";

export default {
  name: "MainFirstComp",
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
.home__first-screen {
  /* padding-left: 30px;
  padding-right: 30px; */
  min-height: 100vh;

  background-image: url("@/assets/first__screen.jpg");
  background-size: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.first-screen__content {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  margin-top: 120px;
  margin-bottom: 60px;
}

.first-screen__content_text {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
}
.first-screen__description {
  font-family: Great Vibes;
  font-size: 36px;
  font-weight: 400;
}

h1 {
  margin: 0;
}

@media screen and (max-width: 678px) and (min-width: 320px) {
  .first-screen__content {
    padding: 30px;
  }
  .first-screen__description {
    font-size: 30px;
  }
}
</style>