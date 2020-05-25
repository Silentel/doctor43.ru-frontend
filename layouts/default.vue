<template>
  <div class="h-screen flex flex-col">
    <header class="text-gray-700 body-font">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <nuxt-link
          class="flex title-font font-medium items-center text-gray-900"
          to="/"
        >
          <img src="~assets/images/logo.png" />
        </nuxt-link>
        <nav
          class="md:ml-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center"
        >
          <nuxt-link class="mr-5 hover:text-gray-900" to="/"
            >Онлайн консультация</nuxt-link
          >
          <nuxt-link class="mr-5 hover:text-gray-900" to="/"
            >Записаться</nuxt-link
          >
        </nav>
        <button class="btn-secondary focus:outline-none hover:bg-green-300">
          <nuxt-link to="/login">Личный кабинет</nuxt-link>
        </button>
      </div>
    </header>
    <nuxt />
    <footer class="text-gray-700 body-font">
      <div
        class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
      >
        <p
          class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
        >
          © 2004 — 2020 Центр диагностики и лечения «Лайт»
        </p>
        <span
          class="text-sm text-gray-500 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
        >
          info1@center-light.ru
        </span>
      </div>
    </footer>
  </div>
</template>

<style>
/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} */

/* *,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
} */
</style>
