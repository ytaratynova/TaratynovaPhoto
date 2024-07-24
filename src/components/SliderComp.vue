<template>
  <transition name="modal-slider">
    <div class="modal-backdrop">
      <div class="modal" role="dialog">
        <header class="modal-header" id="modalTitle">
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
        </header>

        <div class="modal-body" id="modalGallery">
          <!-- <button @click="nextPhoto">prev</button> -->

          <img
            :src="require('@/assets/' + curPhoto[0])"
            alt="photo"
            class="modal-photo"
          />
          <!-- <button @click="nextPhoto">next</button> -->
        </div>

        <footer class="modal-footer">
          <button
            type="button"
            class="btn-green"
            @click="close"
            aria-label="Close modal"
          >
            Ок!
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "SliderComp",
  props: {
    curPhoto: Array,
    category: String,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    close() {
      this.$emit("closeSlider");
    },
    nextPhoto() {},
  },
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["getGalleryByCategory", "getGalleryByCategoryLength"]),
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-photo {
  width: 100%;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  text-align: start;
  max-width: 80vw;
  display: flex;
  flex-direction: row;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
  padding: 6px;
}
</style>