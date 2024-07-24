<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" :aria-labelledby="pack.package">
        <header class="modal-header" id="modalTitle">
          <div>
            <h2>{{ pack.package }} - {{ pack.price }}</h2>
          </div>

          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section class="modal-body" id="modalDescription">
          <div v-if="pack.package !== 'Пакет Важное событие'">
            <h3>В СТОИМОСТЬ ВХОДИТ:</h3>
            <ul>
              <li>
                предварительная консультация по выбору места съемки (прогулка,
                дом, подбор студии)
              </li>
              <li>консультация по выбору одежды</li>
              <li>
                фотосъемка {{ pack.duration }} часов (дом, прогулка, студия)
              </li>
              <li>
                {{ pack.photos }} фотокарточек в авторской обработке, а также их
                уменьшенные изображения для размещения в интернете
              </li>
              <li>фотографии передаются ссылкой через файлообменник</li>
              <li>{{ pack.book }}</li>
            </ul>
            <h3>ВАЖНО:</h3>
            <ul>
              <li>фотографии на ретушь выбираются фотографом</li>
              <li>исходники заказчику не передаются</li>
              <li>аренда фотостудии в стоимость НЕ входит</li>
            </ul>
            <h3>БРОНИРОВАНИЕ</h3>
            <ul>
              <li>
                предоплата фотографу - 3.000 рублей (подбор места съемки +
                консультация по образу)*
              </li>
              <li>предоплата студии - 100%</li>
              <p><br /></p>

              <p>*в случае отказа от съемки предоплата не возвращается,</p>
              <p>перенос даты возможен при согласовании сторон</p>
              <p>
                **предоплата в студии (если это возможно) возвращается в
                соответствии с условиями студии
              </p>
            </ul>
            <h3>ОПЦИОННО:</h3>
            <ul>
              <li>
                возможен заказ дополнительных кадров в ретуши и авторской
                обработке, стоимость одного кадра - 750 р.
              </li>
              <li>
                возможен заказ всех хороших фотографий в цветокоррекции (40-60
                шт)- 5000 р.
              </li>
            </ul>
          </div>
          <div v-else>
            <h3>В СТОИМОСТЬ ВХОДИТ:</h3>
            <ul>
              <li>
                фотосъемка {{ pack.duration }} часов (дом, прогулка, студия)
              </li>
              <li>{{ pack.photos }} фотокарточек в базовой обработке</li>
              <li>фотографии передаются ссылкой через файлообменник</li>
              <li>{{ pack.book }}</li>
            </ul>
            <h3>ВАЖНО:</h3>
            <ul>
              <li>фотографии на обработку выбираются фотографом</li>
              <li>исходники заказчику не передаются</li>
              <li>аренда фотостудии в стоимость НЕ входит</li>
            </ul>
            <h3>БРОНИРОВАНИЕ</h3>
            <ul>
              <li>предоплата фотографу - 3.000 рублей</li>
              <li>предоплата студии - 100%</li>
              <p><br /></p>

              <p>*в случае отказа от съемки предоплата не возвращается,</p>
              <p>перенос даты возможен при согласовании сторон</p>
              <p>
                **предоплата в студии (если это возможно) возвращается в
                соответствии с условиями студии
              </p>
            </ul>
            <h3>ОПЦИОННО:</h3>
            <ul>
              <li>
                возможен заказ дополнительных кадров в ретуши и авторской
                обработке, стоимость одного кадра - 750 р.
              </li>
              <li>
                возможен печать полиграфической книги (стоимость зависит от
                размера книги)
              </li>
            </ul>
          </div>
        </section>

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
export default {
  name: "ModalComp",
  props: {
    pack: Object,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    close() {
      this.$emit("closeModal");
    },
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
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  max-width: 90vw;
  overflow-y: scroll;
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

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  text-align: start;
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