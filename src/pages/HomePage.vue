<template>
  <div class="main">
    <VerticalSliderComp class="fixed" />
    <div>
      <MainFirstComp />
      <MainSecondComp />
    </div>
  </div>
</template>

<script>
import MainFirstComp from "@/components/MainFirstComp.vue";
import MainSecondComp from "@/components/MainSecondComp.vue";
import VerticalSliderComp from "@/components/VerticalSliderComp.vue";

export default {
  name: "HomePage",
  components: {
    MainFirstComp,
    MainSecondComp,
    VerticalSliderComp,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.fixed {
  position: fixed;
  padding-left: 30px;
  height: 100vh;
}
@media screen and (max-width: 678px) and (min-width: 320px) {
  .fixed {
    display: none;
  }
}
</style>