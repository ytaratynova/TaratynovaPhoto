<template>
  <div class="header">
    <div class="header__burger" @click="showMenu">
      <svg
        class="burger__img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
        />
      </svg>
      <svg
        class="close__img burger__img hiden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </div>
    <nav class="header__menu" @click="showMenu">
      <router-link to="/" class="header__link">Главная</router-link>
      <router-link to="/about" class="header__link">Обо мне</router-link>
      <router-link
        to="/portfolio/children"
        class="header__link"
        @click="showMenu"
        >Портфолио</router-link
      >
      <router-link to="/prices" class="header__link">Услуги и цены</router-link>
      <router-link to="/contacts" class="header__link">Контакты</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  components: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {
    showMenu() {
      const menu = document.querySelector(".header__menu");
      const menuBurger = document.querySelector(".header__burger");
      const closeImg = document.querySelector(".close__img");
      const burgerImg = document.querySelector(".burger__img");

      if (getComputedStyle(menuBurger).display != "none") {
        menu.classList.toggle("active");

        closeImg.classList.toggle("hiden");

        burgerImg.classList.toggle("hiden");
      }
    },
  },
};
</script>

<style>
.header {
  max-width: 1600;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  /* padding-left: 30px;
  padding-right: 30px; */

  position: absolute;
  width: 100vw;
}
.header__burger {
  display: none;
}
.header__menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;

  gap: 35px;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
}
.header__link {
  color: rgba(204, 204, 204, 1);

  font-family: Montserrat, sans-serif;
  font-size: 25px;
  font-weight: 500;
}
.header__link:hover {
  text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
    0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(191, 226, 255, 0.52),
    0 0 21px rgba(191, 226, 255, 0.92), 0 0 34px rgba(191, 226, 255, 0.78),
    0 0 54px rgba(191, 226, 255, 0.92);
}

.hiden {
  display: none;
}

@media screen and (max-width: 920px) and (min-width: 720px) {
  .header__link {
    font-size: 20px;
  }
}

@media screen and (max-width: 719px) and (min-width: 679px) {
  .header__link {
    font-size: 18px;
  }
}

@media screen and (max-width: 678px) and (min-width: 320px) {
  .header__menu {
    flex-direction: column;
    background-color: #086577;
    height: 100vh;
    width: 100vw;
    z-index: 9;
    position: absolute;
    top: -30px;
    left: -120%;
    transition: all 0.5s ease 0s;
  }
  .active {
    left: 0px;
    transition: all 0.5s ease 0s;
  }
  .header__burger {
    display: block;
    position: absolute;
    width: 30px;
    height: 20px;
    top: 20px;
    left: 30px;
    z-index: 10;
  }
  .burger__img path {
    fill: aliceblue;
  }
  .header__burger:hover .burger__img {
    transform: scale(1.2);
  }
}
</style>