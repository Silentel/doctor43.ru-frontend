<template>
  <div class="h-screen flex flex-col">
    <header class="header">
      <div class="container container-header">
        <div class="w-full flex justify-between items-center">
          <nuxt-link to="/lk">
            <img class="w-20 md:w-auto" src="~assets/images/logo.png" />
          </nuxt-link>
          <div class="flex">
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
                <span v-if="user" class="font-medium">{{
                  user.full_name
                }}</span>
                <span class="text-xs text-primary">
                  Врач-невролог
                </span>
                <span class="text-xs text-secondary">
                  Неврологическое отделение
                </span>
              </div>
              <ul
                id="menu_nav"
                class="flex flex-wrap text-sm md:text-base cursor-pointer"
              >
                <li
                  id="button_notifications"
                  class="relative mx-1 px-1 py-2 group mb-1 md:mb-0"
                >
                  <div
                    class="font-semibold whitespace-no-wrap text-gray-600 hover:text-primary"
                    @click="$router.push('/lk/notifications')"
                  >
                    <font-awesome-icon
                      icon="bell"
                      class="relative"
                      :class="{ 'text-primary': notifications > 0 }"
                      size="2x"
                    />
                    <span
                      v-if="notifications > 0"
                      class="text-primary text-xs absolute cursor-default rounded-full"
                      >{{ notifications }}</span
                    >
                  </div>
                  <ul
                    v-if="notifications !== 0"
                    class="absolute top-1 right-0 p-2 rounded-lg shadow-md bg-white z-10 hidden group-hover:block"
                  >
                    <li
                      class="bg-gray-200 px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
                    >
                      <font-awesome-icon
                        class="text-primary"
                        icon="exclamation-triangle"
                      />
                      <span class="ml-2 text-primary"
                        >Подтвердите свой email</span
                      >
                    </li>

                    <nuxt-link to="/lk">
                      <li
                        class="bg-gray-200 px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
                      >
                        <font-awesome-icon class="text-primary" icon="video" />
                        <span class="ml-2">14 июня 9:00 - 10:00</span>
                        <span class="ml-2">Иванов И. И.</span>
                      </li>
                    </nuxt-link>
                    <nuxt-link to="/lk">
                      <li
                        class="bg-gray-200 px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
                      >
                        <font-awesome-icon
                          class="text-secondary"
                          icon="comment"
                        />
                        <span class="ml-2">Привет, как дела?</span>
                      </li>
                    </nuxt-link>
                    <div class="cursor-pointer" @click="markRead">
                      <li
                        class="px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
                      >
                        <span class="ml-2">Отметить все как прочитанное</span>
                      </li>
                    </div>
                  </ul>
                  <ul
                    v-else
                    class="absolute top-1 right-0 p-2 rounded-lg shadow-md bg-white z-10 hidden group-hover:block cursor-default"
                  >
                    <span class="ml-2">Нет новых уведомлений</span>
                  </ul>
                </li>
                <li
                  id="button_admin"
                  class="relative mx-1 px-1 py-2 group mb-1 md:mb-0"
                >
                  <div
                    class="font-semibold whitespace-no-wrap text-gray-600 hover:text-primary"
                    @click="$router.push('/lk/profile')"
                  >
                    <font-awesome-icon icon="user-circle" size="2x" />
                  </div>
                  <ul
                    class="absolute top-1 right-0 p-2 rounded-lg shadow-md bg-white z-10 hidden group-hover:block"
                  >
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
            class="flex md:hidden cursor-pointer items-center text-base justify-center"
          >
            <nuxt-link
              class="font-semibold text-gray-600 hover:text-primary mr-4"
              to="/lk/notifications"
            >
              <font-awesome-icon
                icon="bell"
                class="relative"
                :class="{ 'text-primary': notifications > 0 }"
                size="2x"
              />
              <span
                v-if="notifications > 0"
                class="text-primary text-xs absolute cursor-default rounded-full"
                >{{ notifications }}</span
              >
            </nuxt-link>
            <div @click="showMenu">
              <font-awesome-icon icon="bars" size="2x" />
            </div>
          </nav>
        </div>
      </div>
    </header>
    <section class="flex flex-auto">
      <div class="container px-5 py-0 md:py-10 mx-auto flex">
        <div
          class="overflow-hidden shadow-md rounded-lg border border-gray-300 w-64 hidden md:block"
        >
          <nav>
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk' }"
              to="/lk"
            >
              <div class="w-4 mr-2">
                <font-awesome-icon icon="clipboard-list" />
              </div>
              <span class="ml-2">Сегодня</span>
            </nuxt-link>
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/patients' }"
              to="/lk/patients"
            >
              <div class="w-4 mr-2">
                <font-awesome-icon icon="hospital-user" />
              </div>
              <span class="ml-2">Пациенты</span>
            </nuxt-link>
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/schedule' }"
              to="/lk/schedule"
            >
              <div class="w-4 mr-2">
                <font-awesome-icon icon="calendar-alt" />
              </div>
              <span class="ml-2">Расписание</span>
            </nuxt-link>
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/services' }"
              to="/lk/services"
            >
              <div class="w-4 mr-2">
                <font-awesome-icon icon="notes-medical" />
              </div>
              <span class="ml-2">Услуги</span>
            </nuxt-link>
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/chats' }"
              to="/lk/chats"
            >
              <div class="w-4 mr-2">
                <font-awesome-icon icon="comments" />
              </div>
              <span class="ml-2">Чаты</span>
            </nuxt-link>
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/support' }"
              to="/lk/support"
            >
              <div class="w-4 mr-2">
                <font-awesome-icon icon="headset" />
              </div>
              <span class="ml-2">Техподдержка</span>
            </nuxt-link>
          </nav>
          <hr class="my-2" />
          <nav v-if="$route.path.includes('/lk/card')">
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/card/medical' }"
              to="/lk/card/medical"
            >
              <!-- <div class="w-4 mr-2">
              <font-awesome-icon icon="clipboard-list" />
            </div> -->
              <span class="ml-2">Медицинская карта</span>
            </nuxt-link>
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/card/medicines' }"
              to="/lk/card/medicines"
            >
              <!-- <div class="w-4 mr-2">
              <font-awesome-icon icon="hospital-user" />
            </div> -->
              <span class="ml-2">Лекарства</span>
            </nuxt-link>
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/card/directions' }"
              to="/lk/card/directions"
            >
              <!-- <div class="w-4 mr-2">
              <font-awesome-icon icon="calendar-alt" />
            </div> -->
              <span class="ml-2">Направления</span>
            </nuxt-link>
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/card/monitoring' }"
              to="/lk/card/monitoring"
            >
              <!-- <div class="w-4 mr-2">
              <font-awesome-icon icon="notes-medical" />
            </div> -->
              <span class="ml-2">Мониторинг показателей</span>
            </nuxt-link>
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{
                'bg-gray-300': $route.path === '/lk/card/appointments'
              }"
              to="/lk/card/appointments"
            >
              <!-- <div class="w-4 mr-2">
              <font-awesome-icon icon="comments" />
            </div> -->
              <span class="ml-2">Назначенные приемы</span>
            </nuxt-link>
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/card/chat' }"
              to="/lk/card/chat"
            >
              <!-- <div class="w-4 mr-2">
              <font-awesome-icon icon="headset" />
            </div> -->
              <span class="ml-2">Чат с пациентом</span>
            </nuxt-link>
            <nuxt-link
              class="nav-link hover:bg-gray-300"
              :class="{ 'bg-gray-300': $route.path === '/lk/card/polls' }"
              to="/lk/card/polls"
            >
              <!-- <div class="w-4 mr-2">
              <font-awesome-icon icon="headset" />
            </div> -->
              <span class="ml-2">Опросы</span>
            </nuxt-link>
          </nav>
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
      <div class="flex flex-col w-full h-full p-2 text-sm leading-loose">
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
            to="/lk"
            class="flex md:hidden hover:bg-gray-300"
            @click.native="hideMenu"
          >
            <div class="w-10">
              <font-awesome-icon icon="clipboard-list" />
            </div>
            <span class="ml-2">Сегодня</span>
          </nuxt-link>
          <nuxt-link
            to="/lk/patients"
            class="flex md:hidden hover:bg-gray-300"
            @click.native="hideMenu"
          >
            <div class="w-10">
              <font-awesome-icon icon="hospital-user" />
            </div>
            <span class="ml-2">Пациенты</span>
          </nuxt-link>
          <nuxt-link
            to="/lk/schedule"
            class="flex md:hidden hover:bg-gray-300"
            @click.native="hideMenu"
          >
            <div class="w-10">
              <font-awesome-icon icon="calendar-alt" />
            </div>
            <span class="ml-2">Расписание</span>
          </nuxt-link>
          <nuxt-link
            to="/lk/services"
            class="flex md:hidden hover:bg-gray-300"
            @click.native="hideMenu"
          >
            <div class="w-10">
              <font-awesome-icon icon="notes-medical" />
            </div>
            <span class="ml-2">Услуги</span>
          </nuxt-link>
          <nuxt-link
            to="/lk/chats"
            class="flex md:hidden hover:bg-gray-300"
            @click.native="hideMenu"
          >
            <div class="w-10">
              <font-awesome-icon icon="comments" />
            </div>
            <span class="ml-2">Чаты</span>
          </nuxt-link>
          <nuxt-link
            to="/lk/support"
            class="flex md:hidden hover:bg-gray-300"
            @click.native="hideMenu"
          >
            <div class="w-10">
              <font-awesome-icon icon="headset" />
            </div>
            <span class="ml-2">Техническая поддержка</span>
          </nuxt-link>
          <hr />
          <nav v-if="$route.path.includes('/lk/card')">
            <nuxt-link
              class="flex md:hidden hover:bg-gray-300"
              to="/lk/card/medical"
              @click.native="hideMenu"
            >
              <span class="ml-2">Медицинская карта</span>
            </nuxt-link>
            <nuxt-link
              class="flex md:hidden hover:bg-gray-300"
              to="/lk/card/medicines"
              @click.native="hideMenu"
            >
              <span class="ml-2">Лекарства</span>
            </nuxt-link>
            <nuxt-link
              class="flex md:hidden hover:bg-gray-300"
              to="/lk/card/directions"
              @click.native="hideMenu"
            >
              <span class="ml-2">Направления</span>
            </nuxt-link>
            <nuxt-link
              class="flex md:hidden hover:bg-gray-300"
              to="/lk/card/monitoring"
              @click.native="hideMenu"
            >
              <span class="ml-2">Мониторинг показателей</span>
            </nuxt-link>
            <nuxt-link
              class="flex md:hidden hover:bg-gray-300"
              to="/lk/card/appointments"
              @click.native="hideMenu"
            >
              <span class="ml-2">Назначенные приемы</span>
            </nuxt-link>
            <nuxt-link
              class="flex md:hidden hover:bg-gray-300"
              to="/lk/card/chat"
              @click.native="hideMenu"
            >
              <span class="ml-2">Чат с пациентом</span>
            </nuxt-link>
            <nuxt-link
              class="flex md:hidden hover:bg-gray-300"
              to="/lk/card/polls"
              @click.native="hideMenu"
            >
              <span class="ml-2">Опросы</span>
            </nuxt-link>
          </nav>
          <hr />
          <nuxt-link
            to="/lk/profile"
            class="flex md:hidden hover:bg-gray-300"
            @click.native="hideMenu"
          >
            <div class="w-10">
              <font-awesome-icon icon="user-circle" />
            </div>
            <span class="ml-2">Профиль</span>
          </nuxt-link>
          <nuxt-link
            to="/lk/settings"
            class="flex md:hidden hover:bg-gray-300"
            @click.native="hideMenu"
          >
            <div class="w-10">
              <font-awesome-icon icon="cog" />
            </div>
            <span class="ml-2">Настройки</span>
          </nuxt-link>
          <nuxt-link
            to="/"
            class="flex md:hidden hover:bg-gray-300"
            @click.native="logout"
          >
            <div class="w-10">
              <font-awesome-icon icon="sign-out-alt" />
            </div>
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
  middleware: ['auth'],
  computed: {
    ...mapGetters({
      user: 'user/user',
      notifications: 'user/notifications'
    })
  },
  created() {
    this.$store.commit('user/setNotifications', 10)
    if (localStorage.getItem('user')) {
      this.$store.dispatch(
        'user/autoLogin',
        JSON.parse(localStorage.getItem('user'))
      )
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
    showMenu() {
      this.$modal.show('menu')
    },
    hideMenu() {
      this.$modal.hide('menu')
    },
    markRead() {
      this.$store.commit('user/clearNotifications')
    }
  }
}
</script>

<style>
.group:hover .group-hover\:block {
  display: block !important;
}
</style>
