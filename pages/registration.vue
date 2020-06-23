<template>
  <section class="flex flex-auto text-gray-700">
    <div class="container px-5 py-2 mx-auto flex justify-center items-center">
      <form
        class="bg-gray-300 rounded-lg shadow-md p-2 md:p-8 flex flex-col"
        @submit.prevent="check"
      >
        <h2 class="mb-5">
          Регистрация
        </h2>
        <div v-if="!withPhone" class="flex flex-col">
          <input
            id="email"
            v-model="email"
            class="input"
            placeholder="Почта"
            type="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            required
          />
          <input
            id="fullname"
            v-model="fullname"
            class="input"
            placeholder="ФИО"
            type="text"
            required
          />
          <input
            id="password"
            v-model="password"
            class="input"
            placeholder="Пароль"
            type="password"
            required
          />
        </div>
        <div v-else>
          <VuePhoneNumberInput
            v-model="phone"
            class="mb-4"
            color="#48bb78"
            default-country-code="RU"
            no-country-selector
            :translations="{
              phoneNumberLabel: 'Введите номер телефона',
              example: 'Пример:'
            }"
            :required="true"
            @update="getPhone"
          />
        </div>
        <button class="btn btn-primary text-lg mb-5">
          Зарегистрироваться
        </button>
        <button class="btn bg-secondary" @click="withPhone = !withPhone">
          Зарегистрироваться с помощью <span v-if="!withPhone">телефона</span
          ><span v-else>почты</span>
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Уже зарегистрированы?
          <nuxt-link class="text-gray-700" to="/login">Войти</nuxt-link>
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
      formValid: null,
      email: null,
      fullname: null,
      password: null,
      phone: null,
      formattedPhone: null
    }
  },
  methods: {
    getPhone(phone) {
      if (phone.isValid) {
        this.formattedPhone = phone.formattedNumber
        this.formValid = true
      }
    },
    check() {
      if (!this.withPhone) {
        if (
          this.email !== null &&
          this.fullname !== null &&
          this.password !== null
        ) {
          this.formValid = true
          this.register()
        }
      } else if (this.phone === null) {
        this.$toast.error('Введите номер телефона', {
          position: 'bottom-center',
          duration: 2000
        })
      } else {
        this.register()
      }
    },
    async register() {
      if (this.formValid) {
        try {
          const formData = {
            jsonrpc: '2.0',
            method: 'registration',
            params: {
              email: this.email,
              password: this.password,
              full_name: this.fullname
            }
          }

          await this.$store.dispatch('auth/register', formData)
          this.$toast.success('Регистрация успешно выполнена', {
            position: 'bottom-center',
            duration: 2000
          })
          this.$router.push(`/login`)
        } catch (error) {
          this.$toast.error('Ошибка', {
            position: 'bottom-center',
            duration: 2000
          })
        }
      } else {
        this.$toast.error('Невалидная форма', {
          position: 'bottom-center',
          duration: 2000
        })
      }
    }
  }
}
</script>

<style></style>
