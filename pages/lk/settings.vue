<template>
  <div>
    <h2 class="md:mb-5">
      Настройки
    </h2>
    <ul class="flex border-b mb-4 text-xxs md:text-base">
      <li
        class="text-center w-1/3"
        :class="{
          'border-primary border-b': $route.path === '/lk/settings'
        }"
      >
        <nuxt-link class="tab" to="/lk/settings">Личные данные</nuxt-link>
      </li>
      <li
        class="text-center w-1/3"
        :class="{
          'border-primary border-b': $route.path === '/lk/settings/prof'
        }"
      >
        <nuxt-link class="tab" to="/lk/settings/prof">Специализация</nuxt-link>
      </li>
      <li
        class="text-center w-1/3"
        :class="{
          'border-primary border-b': $route.path === '/lk/settings/extra'
        }"
      >
        <nuxt-link class="tab" to="/lk/settings/extra">Дополнительно</nuxt-link>
      </li>
    </ul>
    <nuxt-child keep-alive />
  </div>
</template>

<script>
export default {
  layout: 'lk'
}
</script>

<style></style>
