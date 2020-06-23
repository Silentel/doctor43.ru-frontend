<template>
  <section class="flex flex-auto text-gray-700">
    <div class="container px-5 py-2 mx-auto flex justify-center items-center">
      <form
        class="bg-gray-300 rounded-lg shadow-md p-2 md:p-8 flex flex-col"
        @submit.prevent="check"
      >
        <h2 class="mb-5">
          Вход
        </h2>
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
          id="password"
          v-model="password"
          class="input"
          placeholder="Пароль"
          type="password"
          required
        />
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
export default {
  data() {
    return {
      token: null,
      formValid: null,
      email: null,
      password: null,
      picked: null
    }
  },
  methods: {
    check() {
      this.formValid = true
      this.login()
    },
    async login() {
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
    }
  }
}
</script>

<style></style>
