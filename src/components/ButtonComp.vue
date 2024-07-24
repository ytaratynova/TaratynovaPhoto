<template>
  <div class="button">
    <div v-if="category === 'about'">
      <router-link :to="`/about`" class="button__link"
        ><span>{{ value }}</span></router-link
      >
    </div>
    <div v-else-if="category === 'mailMe'">
      <router-link :to="`/contacts`" class="button__link"
        ><span>{{ value }}</span></router-link
      >
    </div>
    <div v-else>
      <router-link :to="`/portfolio/${category}`" class="button__link"
        ><span>{{ value }}</span></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {
    value: String,
    category: String,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.button__link {
  position: relative;
  /* padding: 5px 10px; */
  width: 100px;
  color: white;
  /* transition: transform 0.5s easy; */
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
  top: -20px;
  left: -20px;
}
.button__link::after,
.button__link span::after {
  bottom: -20px;
  right: -20px;
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
/* @media screen and (max-width: 1024px) and (min-width: 320px) {
  .button__link {
    width: 80px;
    font-size: 20px;
  }

  .button__link::before,
  .button__link::after {
    height: 20px;
  }

  .button__link span::before,
  .button__link span::after {
    width: 20px;
  }
  .button__link::before,
  .button__link span::before {
    top: -15px;
    left: -15px;
  }
  .button__link::after,
  .button__link span::after {
    bottom: -15px;
    right: -15px;
  }
  span {
    font-size: 15px;
    padding: 15px 15px;
  }
} */
</style>