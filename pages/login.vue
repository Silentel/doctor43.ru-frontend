<template>
  <section class="flex flex-auto text-gray-700">
    <div class="container px-5 py-2 mx-auto flex justify-center items-center">
      <form
        class="bg-gray-300 rounded-lg shadow-md p-2 md:p-8 flex flex-col"
        @submit.prevent="login"
      >
        <h2 class="mb-5">
          Вход
        </h2>
        <input
          v-if="!withPhone"
          id="email"
          v-model="email"
          class="input"
          autocomplete="email"
          placeholder="Почта *"
          type="email"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          required
        />
        <VuePhoneNumberInput
          v-else
          id="tel"
          v-model="phone"
          class="mb-4"
          autocomplete="tel"
          color="#48bb78"
          default-country-code="RU"
          no-country-selector
          :translations="{
            phoneNumberLabel: 'Телефон',
            example: 'Пример:'
          }"
          :required="true"
          @update="isValidPhone"
        />
        <input
          id="current-password"
          v-model="password"
          class="input"
          autocomplete="current-password"
          placeholder="Пароль *"
          type="password"
          required
        />
        <label
          for="toogle"
          class="flex justify-center items-center cursor-pointer mb-4"
        >
          <div class="relative">
            <input
              id="toogle"
              v-model="withPhone"
              type="checkbox"
              class="hidden"
            />
            <div
              class="toggle__line w-6 h-3 bg-gray-400 rounded-full shadow-inner"
            ></div>
            <div
              class="toggle__dot absolute w-3 h-3 bg-white rounded-full shadow"
            ></div>
          </div>
          <div class="ml-3 text-gray-700">
            с помощью телефона
          </div>
        </label>
        <button class="btn btn-primary text-lg mb-5 focus:outline-none">
          Войти
        </button>
        <p class="flex justify-between text-xs text-gray-500 mt-3">
          <nuxt-link to="/recovery">Забыли пароль?</nuxt-link>
          <nuxt-link to="/registration">Регистрация</nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

export default {
  components: {
    VuePhoneNumberInput
  },
  data() {
    return {
      withPhone: false,
      validPhone: false,
      email: null,
      phone: null,
      formattedPhone: null,
      password: null
    }
  },
  methods: {
    isValidPhone(phone) {
      this.validPhone = false

      if (phone.isValid) {
        this.formattedPhone = phone.formattedNumber
        this.validPhone = true
      }
    },
    async login() {
      switch (this.withPhone) {
        case true:
          if (this.validPhone) {
            try {
              const formData = {
                phone: this.formattedPhone,
                password: this.password
              }

              await this.$store.dispatch('auth/login', formData)

              this.$toast.success('Вход успешно выполнен', {
                position: 'bottom-center',
                duration: 2000
              })

              this.$router.push('/lk')
            } catch (error) {
              this.$toast.error('Ошибка', {
                position: 'bottom-center',
                duration: 2000
              })
            }
          } else {
            this.$toast.error('Неверный номер', {
              position: 'bottom-center',
              duration: 2000
            })
          }

          break

        case false:
          try {
            const formData = {
              email: this.email,
              password: this.password
            }

            await this.$store.dispatch('auth/login', formData)

            this.$toast.success('Вход успешно выполнен', {
              position: 'bottom-center',
              duration: 2000
            })

            this.$router.push('/lk')
          } catch (error) {
            this.$toast.error('Ошибка', {
              position: 'bottom-center',
              duration: 2000
            })
          }

          break
      }
    }
  }
}
</script>

<style></style>
