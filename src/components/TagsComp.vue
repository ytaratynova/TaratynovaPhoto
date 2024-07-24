<template>
  <div class="category__tags">
    <button
      class="category__tag"
      v-for="category in getCategoriesList"
      :key="category.id"
      @click="changeActiveTag(category.category)"
      :class="{ active: category.category === activeTag }"
    >
      {{ category.subtitle }}
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "TagsComp",

  data() {
    return {
      activeTag: "children",
    };
  },

  mounted() {
    this.activeTag = this.$route.params[0].slice(1);
  },

  methods: {
    changeActiveTag(category) {
      if (this.activeTag !== category) {
        this.$router.push({ path: `/portfolio/${category}` });
        this.activeTag = category;
        this.$emit("setActiveTag", category);
      }
    },
  },
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["getCategoriesList"]),
  },
};
</script>

<style scoped>
.category__tags {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}
.category__tag {
  color: aliceblue;
  font-size: 20px;
  height: 30px;
  padding-left: 7px;
  padding-right: 7px;
}
.category__tag:hover {
  /* color: antiquewhite; */
  text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
    0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(191, 226, 255, 0.52),
    0 0 21px rgba(191, 226, 255, 0.92), 0 0 34px rgba(191, 226, 255, 0.78),
    0 0 54px rgba(191, 226, 255, 0.92);
}
.active {
  background: gray;
}
button {
  background: none;
  border: 0ch;
  outline: none;
}
@media screen and (max-width: 1024px) and (min-width: 679px) {
  .category__tag {
    font-size: 16px;
  }
}
@media screen and (max-width: 678px) and (min-width: 320px) {
  .category__tag {
    font-size: 16px;
  }
  .category__tags {
    flex-direction: column;
    gap: 5px;
  }
}
</style>