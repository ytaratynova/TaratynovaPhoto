<template>
  <div class="button">
    <button class="button__link" @click="showModal(pack)">
      <span>{{ value }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {
    value: String,
    pack: Object,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    showModal(pack) {
      this.$emit("setModalVisible", pack);
    },
  },
};
</script>

<style scoped>
.button__link {
  position: relative;
  width: 100px;
  color: white;
  font-size: 20px;
}

.button__link::before,
.button__link::after {
  content: "";
  position: absolute;
  height: 20px;
  width: 1px;
  background-color: white;
}

.button__link span::before,
.button__link span::after {
  content: "";
  position: absolute;
  height: 1px;
  width: 15px;
  background-color: white;
}
.button__link::before,
.button__link span::before {
  left: -20px;
}
.button__link::after,
.button__link span::after {
  bottom: 1px;
  right: -40px;
}
span {
  font-size: 20px;
  padding: 20px 20px;
}

.button:hover .button__link {
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
</style>