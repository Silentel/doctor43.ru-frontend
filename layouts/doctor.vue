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
          <!-- <nuxt-link class="mr-5 hover:text-gray-900" to="/"
            >Онлайн консультация</nuxt-link
          >
          <nuxt-link class="mr-5 hover:text-gray-900" to="/"
            >Записаться</nuxt-link
          > -->
        </nav>
        <ul
          id="menu_nav"
          class="flex flex-wrap p-1 md:p-2 text-sm md:text-base"
        >
          <li
            id="button_admin"
            class="relative mx-1 px-1 py-2 group mb-1 md:mb-0"
          >
            <nuxt-link
              class="font-semibold whitespace-no-wrap text-gray-600 hover:text-primary"
              to="/doctor"
            >
              <font-awesome-icon icon="user-circle" size="2x" />
            </nuxt-link>
            <ul
              class="absolute right-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block"
            >
              <nuxt-link class="" to="/doctor/profile">
                <li
                  class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
                >
                  <font-awesome-icon icon="user" />
                  <span class="ml-2">Профиль</span>
                </li>
              </nuxt-link>

              <nuxt-link class="" to="/doctor/settings">
                <li
                  class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
                >
                  <font-awesome-icon icon="cog" />
                  <span class="ml-2">Настройки</span>
                </li>
              </nuxt-link>
              <nuxt-link class="" to="/">
                <li
                  class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
                >
                  <font-awesome-icon icon="sign-out-alt" />
                  <span class="ml-2">Выйти</span>
                </li>
              </nuxt-link>
            </ul>
          </li>
        </ul>
      </div>
    </header>
    <section class="flex flex-auto text-gray-700 body-font">
      <div class="container px-5 py-10 mx-auto flex">
        <div class="flex flex-col md:w-1/4 md:pl-12">
          <nav class="list-none -mb-1">
            <li class="mb-1">
              <nuxt-link class="text-gray-600 hover:text-gray-800" to="/doctor">
                Главная
              </nuxt-link>
            </li>
            <li class="mb-1">
              <nuxt-link
                class="text-gray-600 hover:text-gray-800"
                to="/doctor/connect"
              >
                Подключение к клиникам
              </nuxt-link>
            </li>
            <li class="mb-1">
              <nuxt-link
                class="text-gray-600 hover:text-gray-800"
                to="/doctor/schedule"
              >
                Расписание
              </nuxt-link>
            </li>
            <li class="mb-1">
              <nuxt-link
                class="text-gray-600 hover:text-gray-800"
                to="/doctor/tv"
              >
                Телемедицина
              </nuxt-link>
            </li>
          </nav>
        </div>
        <nuxt />
      </div>
    </section>
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
.group:hover .group-hover\:block {
  display: block !important;
}
</style>
