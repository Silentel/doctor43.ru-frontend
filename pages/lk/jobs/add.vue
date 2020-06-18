<template>
  <div>
    <h2 class="md:mb-5">
      Добавление места работы
    </h2>
    <div
      class="flex flex-col overflow-hidden shadow-md rounded-lg border border-gray-300 p-2"
    >
      <div class="flex">
        <input type="text" class="input w-full mr-2" placeholder="Найти" />
        <input type="text" class="input w-full" placeholder="Город" />
      </div>
      <div class="flex">
        <div class="w-full">Направления</div>
        <div>Фильтры</div>
        <button class="btn btn-secondary mb-2" @click="addClinic">
          Найти
        </button>
      </div>
    </div>
    <div
      class="flex overflow-hidden shadow-md rounded-lg border border-gray-300 p-2"
    >
      <ul class="w-full">
        <li class="flex items-center">
          <font-awesome-icon class="mr-8" icon="clinic-medical" size="2x" />
          <div class="w-full">Поликлиника 1</div>
          <button class="btn btn-primary mb-2" @click="addClinic">
            Добавить
          </button>
        </li>
        <li class="flex items-center">
          <font-awesome-icon class="mr-8" icon="clinic-medical" size="2x" />
          <div class="w-full">Поликлиника 2</div>
          <button class="btn btn-primary mb-2" @click="addClinic">
            Добавить
          </button>
        </li>
        <li class="flex items-center">
          <font-awesome-icon class="mr-8" icon="clinic-medical" size="2x" />
          <div class="w-full">Поликлиника 3</div>
          <button class="btn btn-primary mb-2" @click="addClinic">
            Добавить
          </button>
        </li>
        <li class="flex items-center">
          <font-awesome-icon class="mr-8" icon="clinic-medical" size="2x" />
          <div class="w-full">Поликлиника 4</div>
          <button class="btn btn-primary mb-2" @click="addClinic">
            Добавить
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'lk',
  data() {
    return {
      checkedClinic: [],
      clinics: []
    }
  },
  methods: {
    addClinic() {
      this.$toast.success('Заявка на подключение успешно отправлена', {
        position: 'bottom-center',
        duration: 2000
      })
    }
  }
}
</script>

<style></style>
