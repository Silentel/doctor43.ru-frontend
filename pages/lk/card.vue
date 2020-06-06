<template>
  <div>
    <h2 class="md:mb-5">
      Карточка пациента
    </h2>
    <div class="flex">
      <ul class="w-full leading-loose mb-2">
        <li class="flex items-center justify-between border-b py-2">
          <span>Фамилия</span>
          <span class="font-medium">Иванов</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Имя</span>
          <span class="font-medium">Иван</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Отчество</span>
          <span class="font-medium">Иванович</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Возраст</span>
          <span class="font-medium">32 года</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Город</span>
          <span class="font-medium">Киров</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'lk'
}
</script>

<style></style>
