<template>
  <section class="flex flex-auto text-gray-700">
    <div class="container px-5 py-2 mx-auto flex justify-center items-center">
      <form
        class="bg-gray-300 rounded-lg shadow-md p-2 md:p-8 flex flex-col"
        @submit.prevent="send"
      >
        <h2 class="mb-5">
          Восстановление пароля
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
        <button
          class="btn btn-primary text-lg mb-5 focus:outline-none"
          @click="check"
        >
          Восстановить
        </button>
        <p class="flex justify-between text-xs text-gray-500 mt-3">
          <nuxt-link to="/login">Войти</nuxt-link>
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
      formValid: null,
      email: null,
      password: null,
      picked: null
    }
  },
  methods: {
    check() {
      // if (this.picked === null) {
      //   this.$toast.error('Не выбран тип кабинета', {
      //     position: 'bottom-center',
      //     duration: 2000
      //   })
      // } else {
      this.formValid = true
      // }
    },
    send() {
      this.$toast.success('Инструкции по восстановлению отправлены на почту', {
        position: 'bottom-center',
        duration: 2000
      })
      this.$router.push('/login')
      // if (this.email === 'test@doctor43.ru' && this.password === '123456') {
      //   if (this.formValid) {
      //     this.$toast.success('Вход успешно выполнен', {
      //       position: 'bottom-center',
      //       duration: 2000
      //     })
      //     this.$store.dispatch('user/login', user)
      //     this.$router.push('/doctor')
      //   }
      // } else {
      //   this.$toast.error('Неверный логин или пароль', {
      //     position: 'bottom-center',
      //     duration: 2000
      //   })
      // }
    }
  }
}
</script>

<style></style>
