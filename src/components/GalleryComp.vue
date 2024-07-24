<template>
  <div>
    <TagsComp class="tags" @setActiveTag="setActiveTag" />
    <div class="portfolio">
      <button
        class="gallery"
        v-for="photo in getGalleryByCategory(category)"
        :key="photo.id"
        @click="showSlider(photo)"
      >
        <img
          class="gallery__photo"
          :src="require('@/assets/' + photo[0])"
          alt="photo"
        />
      </button>
    </div>
    <SliderComp
      v-show="isModalVisible"
      @closeSlider="closeSlider"
      :category="this.category"
      :curPhoto="this.curPhoto"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SliderComp from "./SliderComp.vue";
import TagsComp from "./TagsComp.vue";

export default {
  name: "GalleryComp",
  components: {
    TagsComp,
    SliderComp,
  },

  data() {
    return {
      category: "children",
      isModalVisible: false,
      curPhoto: ["children_01", 0],
    };
  },

  mounted() {
    this.category = this.$route.params[0].slice(1);
  },

  methods: {
    setActiveTag(category) {
      this.category = category;
    },
    showSlider(photo) {
      this.isModalVisible = true;
      this.curPhoto = photo;
    },
    closeSlider() {
      this.isModalVisible = false;
    },
  },
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["getGalleryByCategory"]),
  },
};
</script>

<style scoped>
.portfolio {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  align-items: center;
  padding: 30px;
}
.gallery {
  max-width: 1200px;
}
.gallery__photo {
  width: 100%;
}
button {
  background: none;
  border: 0ch;
  outline: none;
}
@media screen and (max-width: 1023px) and (min-width: 769px) {
  .portfolio {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 768px) and (min-width: 320px) {
  .portfolio {
    grid-template-columns: 1fr;
  }
}
</style>