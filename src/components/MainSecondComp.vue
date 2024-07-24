<template>
  <div class="home__section">
    <div
      class="section"
      v-for="section in getCategoriesList"
      :key="section.id"
      :style="`background-image: url(${require('@/assets/' + section.img)})`"
      :id="section.id"
    >
      <div class="section__content">
        <p class="section__subtitle">{{ section.subtitle }}</p>
        <p class="section__description">{{ section.description }}</p>
        <ButtonComp :value="'Посмотреть'" :category="section.category" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ButtonComp from "./ButtonComp.vue";

export default {
  name: "MainSecondComp",
  components: {
    ButtonComp,
  },
  props: ["section"],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["getCategoriesList"]),
  },
};
</script>

<style scoped>
.section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: no-repeat;
  background-position: center;
  background-size: cover;
  padding-left: 30px;
  padding-right: 30px;
}

.section__img {
  width: 100%;
  object-fit: cover;
}

.section__content {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  align-items: center;
  justify-content: center;
  gap: 60px;
  background: rgb(0 0 0 0.7);
}

.section__subtitle {
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  font-weight: 500;
}
.section__description {
  font-size: 20px;
}

@media screen and (max-width: 678px) and (min-width: 320px) {
  .section__content {
    /* padding-left: 50px;
    padding-right: 50px; */
    min-width: 300px;
    justify-content: center;
  }

  .section__subtitle {
    font-size: 30px;
  }
  .section__description {
    font-size: 18px;
    padding: 10px;
  }
}
</style>