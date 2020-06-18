<template>
  <div>
    <div class="flex md:mb-5">
      <h2 class="w-full">
        Места работы
      </h2>
      <button class="btn btn-primary" @click="$router.push('/lk/jobs/add')">
        <font-awesome-icon icon="plus" />
      </button>
    </div>
    <div
      class="overflow-hidden shadow-md rounded-lg border border-gray-300 p-2"
    >
      <h2>Ваши места работы</h2>
      <ul v-if="clinics.length" class="w-full leading-loose">
        <li class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600">
          <label>
            <!-- <input
              v-model="checkedClinic"
              class="mr-2"
              type="checkbox"
              value="1"
            /> -->
            {{ clinics[0] }}
          </label>
        </li>
      </ul>
      <ul v-else class="w-full leading-loose">
        <li class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600">
          <span class="ml-2">Список пуст</span>
        </li>
      </ul>
    </div>
    <div
      class="overflow-hidden shadow-md rounded-lg border border-gray-300 p-2"
    >
      <h2>Заявки на добавление</h2>
      <ul class="w-full leading-loose">
        <li class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600">
          <span class="ml-2">Нет заявок</span>
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
      clinics: ['Центральная поликлиника "Лайт"']
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
