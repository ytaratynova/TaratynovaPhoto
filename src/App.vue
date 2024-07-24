<template>
  <div id="app">
    <HeaderComp />
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    FooterComp,
  },
  created() {
    this.$router.push({ name: "Home" });
  },
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  background: white;
  text-align: center;
  color: rgba(204, 204, 204, 1);
}

.montserrat-regular {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.great-vibes-regular {
  font-family: "Great Vibes", cursive;
  font-weight: 400;
  font-style: normal;
}

a {
  text-decoration: none;
}

p {
  margin-block-start: 0;
  margin-block-end: 0;
}
@media screen and(max-width: 678px) and(min-width: 320px) {
  .footer__down_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
