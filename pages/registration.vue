<template>
  <section class="flex flex-auto text-gray-700">
    <div class="container px-5 py-2 mx-auto flex justify-center items-center">
      <form
        v-if="!codePage && !passwordPage"
        class="flex flex-col bg-gray-300 rounded-lg shadow-md p-2 md:p-8"
        @submit.prevent="showAgreement"
      >
        <h2 class="mb-5">
          Регистрация
        </h2>
        <div v-if="!withPhone" class="flex flex-col">
          <input
            id="email"
            v-model="email"
            class="input"
            autocomplete="email"
            placeholder="Почта *"
            type="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            required
          />
          <input
            id="new-password"
            v-model="password"
            class="input"
            autocomplete="new-password"
            placeholder="Пароль *"
            type="password"
            required
          />
        </div>
        <div v-else>
          <VuePhoneNumberInput
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
        </div>
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
        <button class="btn btn-primary text-lg mb-5">
          Зарегистрироваться
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Уже зарегистрированы?
          <nuxt-link class="text-gray-700" to="/login">Войти</nuxt-link>
        </p>
      </form>
      <form
        v-if="codePage"
        class="flex flex-col bg-gray-300 rounded-lg shadow-md p-2 md:p-8"
        @submit.prevent="register('registration_code_check')"
      >
        <h2 class="mb-5">
          Введите код подтверждения
        </h2>
        <input
          id="one-time-code"
          v-model="code"
          class="input"
          autocomplete="one-time-code"
          placeholder="Код подтверждения"
          type="text"
          required
        />
        <button class="btn btn-primary text-lg mb-5 focus:outline-none">
          Продолжить
        </button>
        <p
          class="text-xs text-gray-500 mt-3 cursor-pointer"
          @click="register('registration_code')"
        >
          Отправить код подтверждения повторно
        </p>
      </form>
      <form
        v-if="passwordPage"
        class="flex flex-col bg-gray-300 rounded-lg shadow-md p-2 md:p-8"
        @submit.prevent="showAgreement"
      >
        <h2 class="mb-5">
          Введите пароль
        </h2>
        <input
          id="new-password"
          v-model="password"
          class="input"
          autocomplete="new-password"
          placeholder="Пароль"
          type="password"
          required
        />
        <button class="btn btn-primary text-lg mb-5 focus:outline-none">
          Завершить регистрацию
        </button>
      </form>
    </div>
    <modal name="agreement" height="auto" :adaptive="true">
      <div class="flex flex-col w-full h-full p-2 text-sm leading-loose">
        <div class="flex items-center mb-8">
          <span class="font-bold"
            >Условия сервиса и пользовательское соглашение</span
          >
          <font-awesome-icon
            class="cursor-pointer ml-auto"
            icon="times"
            @click="hideAgreement"
          />
        </div>
        <div class="flex flex-col justify-between">
          <!-- <textarea id="1" name="1" cols="30" rows="10"></textarea> -->
          <label class="text-gray-500 font-bold mb-4">
            <input
              v-model="agreement"
              class="mr-2 leading-tight"
              type="checkbox"
            />
            <span class="text-sm">
              Согласен с <a href="#" class="text-black">условиями сервиса</a> и
              <a href="#" class="text-black">пользовательским соглашением</a>
            </span>
          </label>
          <button
            class="btn btn-primary text-lg mb-5"
            :disabled="!agreement"
            @click="register('registration')"
          >
            Завершить регистрацию
          </button>
        </div>
      </div>
    </modal>
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
      codePage: false,
      passwordPage: false,
      code: null,
      successCode: false,
      agreement: false,
      withPhone: false,
      validPhone: false,
      email: null,
      phone: null,
      formattedPhone: null,
      password: null
    }
  },
  methods: {
    showAgreement() {
      this.codePage = false
      if (!this.withPhone) {
        this.$modal.show('agreement')
      } else if (!this.passwordPage) {
        this.register('registration_code')
      } else {
        this.$modal.show('agreement')
      }
    },
    hideAgreement() {
      this.$modal.hide('agreement')
    },
    isValidPhone(phone) {
      this.validPhone = false

      if (phone.isValid) {
        this.formattedPhone = phone.formattedNumber
        this.validPhone = true
      }
    },
    async register(method) {
      switch (this.withPhone) {
        case true:
          if (this.validPhone) {
            if (method === 'registration_code') {
              const formData = {
                jsonrpc: '2.0',
                method,
                params: {
                  phone: this.formattedPhone
                }
              }

              await this.$store.dispatch('auth/register', formData)

              this.codePage = true

              this.$toast.success('Код успешно отправлен', {
                position: 'bottom-center',
                duration: 2000
              })
            }

            if (method === 'registration_code_check') {
              const formData = {
                jsonrpc: '2.0',
                method,
                params: {
                  phone: this.formattedPhone,
                  code: this.code
                }
              }

              const response = await this.$store.dispatch(
                'auth/register',
                formData
              )

              if (response) {
                this.codePage = false
                this.passwordPage = true

                this.$toast.success('Код успешно подтвержден', {
                  position: 'bottom-center',
                  duration: 2000
                })
              } else {
                this.$toast.error('Неверный код', {
                  position: 'bottom-center',
                  duration: 2000
                })
              }
            }

            if (method === 'registration') {
              try {
                const formData = {
                  jsonrpc: '2.0',
                  method,
                  params: {
                    phone: this.formattedPhone,
                    password: this.password,
                    agreement: true
                  }
                }

                await this.$store.dispatch('auth/register', formData)

                this.$toast.success('Регистрация успешно выполнена', {
                  position: 'bottom-center',
                  duration: 2000
                })

                this.$router.push('/login')
              } catch (error) {
                this.$toast.error('Ошибка', {
                  position: 'bottom-center',
                  duration: 2000
                })
              }
            }
          } else {
            this.$toast.error('Неверный номер', {
              position: 'bottom-center',
              duration: 2000
            })
          }

          break

        case false:
          if (method === 'registration') {
            try {
              const formData = {
                jsonrpc: '2.0',
                method,
                params: {
                  email: this.email,
                  password: this.password,
                  agreement: true
                }
              }

              await this.$store.dispatch('auth/register', formData)

              this.$toast.success('Регистрация успешно выполнена', {
                position: 'bottom-center',
                duration: 2000
              })

              this.$router.push('/login')
            } catch (error) {
              this.$toast.error('Ошибка', {
                position: 'bottom-center',
                duration: 2000
              })
            }
          }

          break
      }
    }
  }
}
</script>

<style></style>
