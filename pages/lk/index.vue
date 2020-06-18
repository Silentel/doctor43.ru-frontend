<template>
  <div>
    <h2 class="md:mb-5">Список событий на<br />14 июня 2020 года</h2>
    <div class="flex flex-col">
      <ul class="w-full leading-loose">
        <nuxt-link to="/lk/card">
          <li
            class="flex px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
          >
            <div class="w-4">
              <font-awesome-icon class="text-primary" icon="video" />
            </div>
            <div class="w-32">
              <span class="ml-2 text-secondary">08:00 - 08:30</span>
            </div>
            <div>
              <span class="ml-2">Иванов И. И.</span>
            </div>
          </li>
        </nuxt-link>
        <nuxt-link to="/lk/card">
          <li
            class="flex px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
          >
            <div class="w-4">
              <font-awesome-icon class="text-primary" icon="video" />
            </div>
            <div class="w-32">
              <span class="ml-2 text-secondary">11:00 - 11:30</span>
            </div>
            <div>
              <span class="ml-2">Петров П. П.</span>
            </div>
          </li>
        </nuxt-link>
        <nuxt-link to="/lk/card">
          <li
            class="flex px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
          >
            <div class="w-4">
              <font-awesome-icon class="text-primary" icon="microphone" />
            </div>
            <div class="w-32">
              <span class="ml-2 text-secondary">13:00 - 14:00</span>
            </div>
            <div>
              <span class="ml-2">Сидоров С. С.</span>
            </div>
          </li>
        </nuxt-link>
        <nuxt-link to="/lk/card">
          <li
            class="flex px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
          >
            <div class="w-4">
              <font-awesome-icon class="text-primary" icon="clinic-medical" />
            </div>
            <div class="w-32">
              <span class="ml-2 text-secondary">15:00 - 15:20</span>
            </div>
            <div>
              <span class="ml-2">Булкин А. А.</span>
            </div>
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

<style>
/* Sample `apply` at-rules with Tailwind CSS */
/* .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
} */
</style>
