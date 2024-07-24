<template>
  <div class="portfolio__page">
    <div class="forHeader"></div>
    <GalleryComp />
  </div>
</template>

<script>
import GalleryComp from "@/components/GalleryComp.vue";

export default {
  name: "PortfolioPage",
  components: {
    GalleryComp,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.portfolio__page {
  background: black;
}
.forHeader {
  width: 100vw;
  height: 100px;
}
</style>