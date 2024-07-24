<template>
  <nav class="radio-box">
    <input
      type="radio"
      v-for="radio in getTotalRadio"
      :key="radio.id"
      name="part"
      class="radio"
      @click="changeSection(radio)"
    />
  </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "VerticalSliderComp",

  data() {
    return {};
  },
  mounted() {},

  methods: {
    changeSection(id) {
      if (id === this.getTotalRadio) {
        document.getElementById("footer").scrollIntoView();
      } else {
        if (this.$route.name === "Home") {
          document.getElementById(id - 1).scrollIntoView();
        } else {
          document.getElementById(id).scrollIntoView();
        }
      }
    },
  },
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["getTotalRadioForHome", "getTotalRadioForPrices"]),
    getTotalRadio() {
      if (this.$route.name === "Home") {
        return this.getTotalRadioForHome;
      } else {
        return this.getTotalRadioForPrices;
      }
    },
  },
};
</script>

<style>
.radio-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
}

.radio {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

@media screen and(max-width: 679px) {
  .radio-box {
    display: none;
  }
}
</style>