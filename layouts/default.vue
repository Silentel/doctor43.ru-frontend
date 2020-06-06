<template>
  <div class="h-screen flex flex-col">
    <header class="header">
      <div class="container container-header">
        <nuxt-link class="flex font-medium items-center text-gray-900" to="/">
          <img src="~assets/images/logo.png" />
        </nuxt-link>
      </div>
    </header>
    <nuxt />
    <footer class="footer">
      <div class="container container-footer">
        <p
          class="text-xs md:text-sm text-gray-500 md:ml-4 md:pl-4 md:border-gray-200 md:py-2 md:mt-0"
        >
          © 2004 — 2020 Центр диагностики и лечения «Лайт».
        </p>
        <p
          class="text-xs md:text-sm text-gray-500 md:ml-4 md:pl-4 md:border-gray-200 md:py-2 md:mt-0"
        >
          Все права защищены. Политика конфиденциальности.
        </p>
        <span
          class="text-xs md:text-sm text-gray-500 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
        >
          info1@center-light.ru 8 (800) 201-00-03
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style></style>
