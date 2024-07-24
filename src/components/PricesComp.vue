<template>
  <div class="prices-section">
    <div
      class="section"
      v-for="section in getPackagesList"
      :key="section.id"
      :style="`background-image: url(${require('@/assets/' + section.img)})`"
      :id="section.id"
    >
      <div class="section__content">
        <p class="section__subtitle">{{ section.package }}</p>
        <p class="section__description">{{ section.price }}</p>
        <ModalButtonComp
          :pack="section"
          :value="'Подробнее'"
          @setModalVisible="setModalVisible"
        />
      </div>
    </div>
    <ModalComp
      :pack="this.pack"
      v-show="isModalVisible"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ModalButtonComp from "./ModalButtonComp.vue";
import ModalComp from "./ModalComp.vue";

export default {
  name: "PricesComp",
  components: {
    ModalButtonComp,
    ModalComp,
  },

  data() {
    return {
      isModalVisible: false,
      pack: {},
    };
  },

  mounted() {},

  methods: {
    setModalVisible(pack) {
      this.isModalVisible = true;
      this.pack = pack;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  computed: {
    ...mapState(["packages"]),
    ...mapGetters(["getPackagesList"]),
  },
};
</script>

<style scoped>
.section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: no-repeat;
  background-position: center;
  background-size: cover;
  padding-left: 30px;
  padding-right: 30px;
}

.section__content {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 350px;
  align-items: center;
  justify-content: center;
  gap: 60px;
  background: rgba(0, 0, 0, 0.3);
}

.section__subtitle {
  font-family: Montserrat, sans-serif;
  font-size: 30px;
  font-weight: 500;
}
.section__description {
  font-size: 20px;
}
</style>