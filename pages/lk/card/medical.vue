<template>
  <div class="overflow-hidden shadow-md rounded-lg border border-gray-300 px-2">
    <h2 class="md:mb-5">
      Медицинская карта
    </h2>
    <div class="relative text-gray-600">
      <input
        type="text"
        name="search"
        class="input w-full"
        placeholder="Поиск по медкарте"
      />
      <div class="absolute right-0 top-0 mt-3 mr-4">
        <font-awesome-icon icon="search" />
      </div>
    </div>
    <div class="flex pb-2">
      <button class="btn btn-primary mr-2">Все</button>
      <button class="btn btn-primary mr-2">Консультации</button>
      <button class="btn btn-primary mr-2">Анализы</button>
      <button class="btn btn-primary mr-2">Стоматология</button>
      <button class="btn btn-primary mr-2">Обследования</button>
      <button class="btn btn-primary mr-2">Аллергии</button>
      <button class="btn btn-primary">Прививки</button>
    </div>
  </div>
</template>

<script></script>

<style></style>
