<template>
  <div>
    <h2 class="md:mb-5">
      Пациенты
    </h2>
    <div class="flex">
      <ul class="w-full leading-loose">
        <nuxt-link to="/lk/card">
          <li
            class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
          >
            <span class="ml-2">Иванов И. И.</span>
          </li>
        </nuxt-link>
        <nuxt-link to="/lk/card">
          <li
            class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
          >
            <span class="ml-2">Петров П. П.</span>
          </li>
        </nuxt-link>
        <nuxt-link to="/lk/card">
          <li
            class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
          >
            <span class="ml-2">Сидоров С. С.</span>
          </li>
        </nuxt-link>
        <nuxt-link to="/lk/card">
          <li
            class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
          >
            <span class="ml-2">Булкин А. А.</span>
          </li>
        </nuxt-link>
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
