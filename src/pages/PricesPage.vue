<template>
  <div>
    <VerticalSliderComp class="fixed" />
    <PricesComp />
  </div>
</template>

<script>
import VerticalSliderComp from "@/components/VerticalSliderComp.vue";
import PricesComp from "@/components/PricesComp.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "PricesPage",
  components: {
    PricesComp,
    VerticalSliderComp,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  computed: {
    ...mapState(["packages"]),
    ...mapGetters(["getTotalPackages"]),
  },
};
</script>

<style scoped>
.fixed {
  position: fixed;
  padding-left: 30px;
  height: 100vh;
}
</style>