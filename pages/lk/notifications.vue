<template>
  <div>
    <h2 class="md:mb-5">
      Уведомления
    </h2>
    <div class="flex">
      <ul class="w-full leading-loose">
        <nuxt-link to="/lk/card">
          <li
            class="bg-white px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
            :class="{ 'bg-gray-200': notifications > 0 }"
          >
            <font-awesome-icon class="text-primary" icon="video" />
            <span class="ml-2">14 июня 9:00 - 10:00</span>
            <span class="ml-2">Иванов И. И.</span>
          </li>
        </nuxt-link>
        <nuxt-link to="/lk">
          <li
            class="bg-white px-2 whitespace-no-wrap text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-300"
            :class="{ 'bg-gray-200': notifications > 0 }"
          >
            <font-awesome-icon class="text-secondary" icon="comment" />
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'lk',
  computed: {
    ...mapGetters({
      notifications: 'user/notifications'
    })
  },
  methods: {
    markRead() {
      this.$store.commit('user/clearNotifications')
    }
  }
}
</script>

<style></style>
