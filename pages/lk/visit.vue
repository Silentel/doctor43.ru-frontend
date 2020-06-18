<template>
  <div>
    <h2 class="md:mb-5">
      Прием
    </h2>
    <div class="flex flex-col">
      <ul class="leading-loose mb-2">
        <li
          class="flex items-center justify-between border-b py-2"
          @click="$router.push('/lk/card')"
        >
          <span>ФИО</span>
          <span class="font-medium">Сидоров Сидор Сидорович</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Фото</span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHQ36v8FuAviAt-RaqMlzxJcg9uFoMPMNvkCvPzbTdcHrzPDN1&usqp=CAU"
            alt="Фото"
          />
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Услуга</span>
          <span class="font-medium">Название услуги</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Дата</span>
          <span class="font-medium">14 июня 2020 года 08:00 - 08:30</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Статус оплаты</span>
          <span class="font-medium">Оплачено</span>
        </li>
      </ul>
      <h2>Дополнительная информация</h2>
      <ul class="leading-loose mb-2">
        <li class="flex items-center justify-between border-b py-2">
          <span>История посещений (история болезни)</span>
          <span class="font-medium">История</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Результаты анализов</span>
          <span class="font-medium">Результаты</span>
        </li>
      </ul>
      <h2>Блок форм текущего приема</h2>
      <ul class="leading-loose mb-2">
        <li class="flex items-center justify-between border-b py-2">
          <span>Анамнез</span>
          <input type="text" class="input w-2/4" />
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Направления на прием/анализ</span>
          <input type="text" class="input w-2/4" />
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Заключение</span>
          <input type="text" class="input w-2/4" />
        </li>
      </ul>
      <div class="flex justify-end">
        <button class="btn btn-primary">Чат</button>
        <button class="btn btn-secondary ml-2">Видеоконференция</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'lk'
}
</script>

<style></style>
