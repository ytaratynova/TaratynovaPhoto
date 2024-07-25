<template>
  <div class="footer" id="footer">
    <div class="footer__up">
      <router-link to="/contacts" class="footer__banner-text"
        >Ищешь фотографа? Я здесь!</router-link
      >
      <ButtonComp :value="'Связаться'" :category="'mailMe'" />
    </div>

    <div class="footer__down">
      <div class="footer__down_content">
        <div class="footer__logo">
          <ButtonComp :value="'Taratynova.photo'" />
        </div>
        <nav class="footer__menu">
          <h4></h4>
          <router-link to="/" class="footer__link">Главная</router-link>
          <router-link to="/about" class="footer__link">Обо мне</router-link>
          <router-link to="/portfolio/children" class="footer__link"
            >Портфолио</router-link
          >
          <router-link to="/prices" class="footer__link"
            >Услуги и цены</router-link
          >
          <router-link to="/contacts" class="footer__link"
            >Контакты</router-link
          >
        </nav>
        <div class="footer__contacts">
          <h4></h4>
          <a href="https://t.me/daisere" class="icon"
            ><img
              class="icon__img"
              src="@/assets/telegram.svg"
              alt="telegram"
            />
            <p>Телеграм</p></a
          >
          <a
            href="https://wa.me/79267907544?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..."
            class="icon"
          >
            <img class="icon__img" src="@/assets/whatsapp.svg" alt="whatsapp" />
            <p>WhatsApp</p>
          </a>

          <a href="viber://chat?number=%2B79267907544" class="icon">
            <img class="icon__img" src="@/assets/viber.svg" alt="viber" />
            <p>Viber</p>
          </a>

          <a href="https://t.me/TaratynovaPhotoBot" class="icon">
            <img class="icon__img" src="@/assets/avatar.png" alt="viber" />
            <p>Бот</p>
          </a>
        </div>
      </div>
      <p class="copyright">
        Copyright ©2024 All rights reserved | Made by IuliiaTaratynova
      </p>
    </div>
  </div>
</template>

<script>
import ButtonComp from "./ButtonComp.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "FooterComp",
  components: {
    ButtonComp,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["getTotalRadio"]),
  },
};
</script>

<style >
.footer {
  background: linear-gradient(rgb(0 0 0 / 0) 60%, rgb(0 0 0 / 0.7) 60%),
    url("@/assets/footer__banner.jpg");
  background-size: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  /* display: grid;
  grid-template-columns: 1fr 10fr; */
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.footer__content {
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.footer__up {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60vh;
}

.footer__banner-text {
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  font-weight: 500;
  color: aliceblue;
}

.footer__down {
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.footer__down_content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.footer__logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__menu {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.footer__link {
  color: rgba(204, 204, 204, 1);
}
.footer__link:hover {
  color: aliceblue;
}

.copyright {
  color: rgb(74, 72, 72);
}
a {
  text-decoration: none;
}
.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  padding-left: 80px;
}
.icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
}
.icon p {
  color: aliceblue;
  font-size: 15px;
}

.icon p:hover {
  transform: scale(1.2);
}

.icon__img {
  width: 30px;
  padding-right: 15px;
}

@media screen and (max-width: 1024px) and (min-width: 679px) {
  .footer__banner-text {
    font-size: 32px;
  }
  .footer__logo {
    display: none;
  }
  .footer__down_content {
    grid-template-columns: 1fr 1fr;
  }
  .footer__up {
    flex-direction: column;
  }
}
@media screen and (max-width: 678px) and (min-width: 320px) {
  .footer__banner-text {
    font-size: 32px;
  }
  .footer__up {
    flex-direction: column;
  }
  .footer__down {
    height: 60vh;
    align-items: center;
  }
  .footer__down_content {
    grid-template-columns: 1fr;
  }
  .footer__logo {
    display: none;
  }
  .footer__menu {
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 10px;
  }
  .footer__link {
    font-size: 12px;
  }
  .footer__contacts {
    flex-direction: row;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
  }
  .icon p {
    display: none;
  }
  icon__img {
    width: 100%;
    padding-right: 10px;
  }
  .copyright {
    font-size: 9px;
  }
}
</style>