<template>
  <div class="h-screen flex flex-col">
    <header class="header">
      <div class="container container-header">
        <div class="w-full flex justify-between items-center">
          <nuxt-link to="/lk">
            <img class="w-20 md:w-auto" src="~assets/images/logo.png" />
          </nuxt-link>
          <div v-if="isAuthenticated" class="flex">
            <div
              class="flex flex-col p-2 text-xs md:text-base rounded shadow-md"
            >
              <span class="font-medium">Ближайший прием</span>
              <nuxt-link
                class="flex flex-col text-xs text-primary"
                to="/lk/card"
              >
                <div>
                  <font-awesome-icon icon="microphone" />
                  <span class="text-xs text-primary">08:00 - 08-30</span>
                </div>
                <span class="text-xs text-secondary"
                  >Иван Иванов Иванович</span
                ></nuxt-link
              >
            </div>
            <div class="hidden md:flex ml-2 p-2 items-center rounded shadow-md">
              <div class="flex flex-col px-1">
                <span class="font-medium">Сычёва Ольга Алексеевна</span>
                <span class="text-xs text-primary">
                  Врач-невролог
                </span>
                <span class="text-xs text-secondary">
                  Неврологическое отделение
                </span>
              </div>
              <ul id="menu_nav" class="flex flex-wrap text-sm md:text-base">
                <li
                  id="button_admin"
                  class="relative mx-1 px-1 py-2 group mb-1 md:mb-0"
                >
                  <div
                    class="font-semibold whitespace-no-wrap text-gray-600 hover:text-primary"
                  >
                    <font-awesome-icon icon="user-circle" size="2x" />
                  </div>
                  <ul
                    class="absolute top-1 right-0 p-2 rounded-lg shadow-md bg-white z-10 hidden group-hover:block"
                  >
                    <nuxt-link class="" to="/lk/profile">
                      <li
                        class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
                      >
                        <font-awesome-icon icon="user" />
                        <span class="ml-2">Профиль</span>
                      </li>
                    </nuxt-link>
                    <nuxt-link class="" to="/lk/settings">
                      <li
                        class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
                      >
                        <font-awesome-icon icon="cog" />
                        <span class="ml-2">Настройки</span>
                      </li>
                    </nuxt-link>
                    <nuxt-link class="" to="/" @click.native="logout">
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
          </div>
          <nav
            v-if="isAuthenticated"
            class="flex flex-wrap md:hidden cursor-pointer items-center text-base justify-center items-center"
          >
            <div @click="showMenu">
              <font-awesome-icon icon="bars" size="2x" />
            </div>
          </nav>
          <nav
            v-if="!isAuthenticated"
            class="flex flex-wrap cursor-pointer items-center text-base justify-center items-center"
          >
            <nuxt-link to="/login">
              <font-awesome-icon icon="sign-out-alt" size="2x" />
            </nuxt-link>
          </nav>
        </div>
      </div>
    </header>
    <section class="flex flex-auto">
      <div class="container px-5 py-0 md:py-10 mx-auto flex">
        <div
          class="overflow-hidden shadow-md rounded-lg border border-gray-300 w-64 hidden md:block"
        >
          <div class="p-4">
            <nuxt-link
              class="flex rounded p-2 mb-1 text-lg text-grey-darkest hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/schedule' }"
              to="/lk/schedule"
            >
              <font-awesome-icon icon="calendar-alt" />
              <span class="ml-2">Расписание</span>
            </nuxt-link>
            <nuxt-link
              class="flex rounded p-2 mb-1 text-lg text-grey-darkest hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/support' }"
              to="/lk/support"
            >
              <font-awesome-icon icon="headset" />
              <span class="ml-2">Техподдержка</span>
            </nuxt-link>
            <!-- <nuxt-link
              class="md:hidden flex rounded py-2 mb-1 text-lg text-grey-darkest hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path.includes('/lk/settings') }"
              to="/lk/settings"
            >
              <div>
                <font-awesome-icon icon="cog" />
                <span class="ml-2">Настройки</span>
              </div>
            </nuxt-link> -->
          </div>
        </div>
        <div class="w-full overflow-hidden container container-main">
          <nuxt />
        </div>
      </div>
    </section>
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
        <div
          class="flex flex-col text-xs md:text-sm text-gray-500 md:ml-auto md:mt-0 mt-4"
        >
          <span>info1@center-light.ru</span>
          <span>8 (800) 201-00-03</span>
        </div>
      </div>
    </footer>
    <modal name="menu" height="auto" :adaptive="true">
      <div class="flex flex-col w-full h-full p-2 text-xl leading-loose">
        <div class="flex items-center mb-8">
          <span class="font-bold">Меню</span>
          <font-awesome-icon
            class="cursor-pointer ml-auto"
            icon="times"
            @click="hideMenu"
          />
        </div>
        <div class="flex flex-col justify-between">
          <nuxt-link
            to="/lk/profile"
            class="md:hidden hover:bg-gray-300"
            @click.native="hideMenu"
          >
            <font-awesome-icon icon="user-circle" />
            <span class="ml-2">Профиль</span>
          </nuxt-link>
          <nuxt-link
            to="/lk/schedule"
            class="hover:bg-gray-300"
            @click.native="hideMenu"
            ><font-awesome-icon icon="calendar-alt" />
            <span class="ml-2">Расписание</span>
          </nuxt-link>
          <nuxt-link
            to="/lk/support"
            class="hover:bg-gray-300"
            @click.native="hideMenu"
            ><font-awesome-icon icon="headset" />
            <span class="ml-2">Техническая поддержка</span>
          </nuxt-link>
          <nuxt-link
            to="/lk/settings"
            class="md:hidden hover:bg-gray-300"
            @click.native="hideMenu"
            ><font-awesome-icon icon="cog" />
            <span class="ml-2">Настройки</span>
          </nuxt-link>
          <nuxt-link to="/" @click.native="logout">
            <font-awesome-icon icon="sign-out-alt" />
            <span class="ml-2">Выйти</span>
          </nuxt-link>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ isAuthenticated: 'user/isAuthenticated' })
  },
  created() {
    if (localStorage.getItem('user')) {
      this.$store.dispatch(
        'user/autoLogin',
        JSON.parse(localStorage.getItem('user'))
      )
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
    },
    showMenu() {
      this.$modal.show('menu')
    },
    hideMenu() {
      this.$modal.hide('menu')
    }
  }
}
</script>

<style>
.group:hover .group-hover\:block {
  display: block !important;
}
</style>
