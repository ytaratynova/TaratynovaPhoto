
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      {
        id: 1,
        subtitle: "Детские истории",
        description:
          "Не упускайте возможность сохранить и передать чудесные моменты детства вашего ребенка и создать ценные воспоминания на всю жизнь. Пусть получатся самые прекрасные и трогательные фотографии на память!",
        img: "main__children.jpg",
        category: "children",
        gallery: ["children_01.jpg", "children_02.jpg", "children_03.jpg", "children_04.jpg", "children_05.jpg", "children_06.jpg", "children_07.jpg", "children_08.jpg", "children_09.jpg", "children_10.jpg", "children_11.jpg", "children_12.jpg", "children_13.jpg", "children_14.jpg", "children_15.jpg"],
      },
      {
        id: 2,
        subtitle: "Семейные фотосессии",
        description:
          "Снимки семейной фотосессии будут ценными не только для вас, но и для ваших детей и внуков, потому что они станут историей вашей семьи и свидетельством вашей взаимной любви и поддержки.",
        img: "main__family.jpg",
        category: "family",
        gallery: ["family_01.jpg", "family_02.jpg", "family_03.jpg", "family_04.jpg", "family_05.jpg", "family_06.jpg", "family_07.jpg", "family_08.jpg", "family_09.jpg"],
      },
      {
        id: 3,
        subtitle: "Женский портрет",
        description:
          "Отличный способ подчеркнуть красоту и индивидуальность каждой женщины. Важно выбрать стиль и атмосферу съемки, которые будут соответствовать личности и желаниям модели. Можно остановиться на классическом портрете, модельной съемке, фэшн или более креативном подходе - все зависит от того, что хочет выразить на фотографиях сама женщина. ",
        img: "main__girls.jpg",
        category: "woman",
        gallery: ["girl_01.jpg", "girl_02.jpg", "girl_03.jpg", "girl_04.jpg", "girl_05.jpg", "girl_06.jpg", "girl_07.jpg", "girl_08.jpg", "girl_09.jpg", "girl_10.jpg", "girl_11.jpg", "girl_12.jpg"],
      },
      {
        id: 4,
        subtitle: "Love-story",
        description:
          "Фотосессия love-story - это прекрасный способ запечатлеть вашу историю любви и создать незабываемые фотографии, которые будут напоминать о ваших чувствах друг к другу и будут сопровождать вас на протяжении всей жизни.",
        img: "main__love.jpg",
        category: "love",
        gallery: ["love_01.jpg", "love_02.jpg", "love_03.jpg", "love_04.jpg", "love_05.jpg", "love_06.jpg", "love_07.jpg", "love_08.jpg", "love_09.jpg", "love_10.jpg"],
      },
    ],
    packages: [
      {
        id: 1,
        package: "Пакет Минимальный",
        img: "min.jpg",
        price: "15 000 р.",
        photos: 20,
        duration: "в течение 1-2",
        book: "Без Фотокниги",

      },
      {
        id: 2,
        package: "Пакет Стандартный",
        img: "standart.jpg",
        price: "30 000 р.",
        photos: 35,
        duration: "до 3х",
        book: "Фотокнига 20*20 - 10 разворотов"
      },
      {
        id: 3,
        package: "Пакет Максимальный",
        img: "max.jpg",
        price: "45 000 р.",
        photos: 50,
        duration: "до 4х",
        book: "Фотокнига 25*25 - 15 разворотов"
      },
      {
        id: 4,
        package: "Пакет Важное событие",
        img: "party.jpg",
        duration: "от 2х",
        price: "15 000 р. - первые 2 часа, далее 5 000 р./час",
        photos: "60 фото/час",
        book: "Без Фотокниги"
      },
    ]

  },
  getters: {
    getCategoriesList: (state) => state.categories,

    getTotalRadioForHome: (state) => state.categories.length + 2,

    // getGalleryByCategory: (state) => (tag) => {

    //   return state.categories.filter((item) => item.category === tag)[0].gallery
    // },
    getGalleryByCategory: (state) => (tag) => {
      let photos = []
      state.categories.filter((item) => item.category === tag)[0].gallery.forEach((item, index) => {
        photos.push([item, index])

      })
      return photos
    },

    getGalleryByCategoryLength: (state) => (tag) => {
      return state.categories.filter((item) => item.category === tag)[0].gallery.length
    },

    getTotalRadioForPrices: (state) => state.packages.length + 1,

    getPackagesList: (state) => state.packages,

    getTotalPackages: (state) => state.packages.length + 1,

  },

})


