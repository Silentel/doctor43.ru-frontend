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
        <!-- <div class="flex mb-4">
          <input
            id="client"
            v-model="picked"
            class="radio hidden"
            type="radio"
            name="client"
            value="client"
          />
          <label for="client" class="label">
            <font-awesome-icon icon="hospital-user" />
            <span>Пациент</span>
          </label>

          <input
            id="doctor"
            v-model="picked"
            class="radio hidden"
            type="radio"
            name="doctor"
            value="doctor"
          />
          <label for="doctor" class="label">
            <font-awesome-icon icon="user-md" />
            <span>Врач</span>
          </label>

          <input
            id="clinic"
            v-model="picked"
            class="radio hidden"
            type="radio"
            name="clinic"
            value="clinic"
          />
          <label for="clinic" class="label">
            <font-awesome-icon icon="clinic-medical" />
            <span>Клиника</span>
          </label>
        </div> -->
        <button
          class="btn btn-primary text-lg mb-5 focus:outline-none"
          @click="check"
        >
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
    login() {
      const user = {
        email: this.email,
        password: this.password
      }
      if (this.email === 'test@doctor43.ru' && this.password === '123456') {
        if (this.formValid) {
          this.$toast.success('Вход успешно выполнен', {
            position: 'bottom-center',
            duration: 2000
          })
          this.$store.dispatch('user/login', user)
          this.$router.push('/lk')
        }
      } else {
        this.$toast.error('Неверный логин или пароль', {
          position: 'bottom-center',
          duration: 2000
        })
      }
    }
  }
}
</script>

<style></style>
