<template>
  <section class="flex flex-auto text-gray-700 body-font">
    <div class="container px-5 mx-auto flex justify-center items-center">
      <div class="bg-gray-300 rounded-lg p-2 md:p-8 flex flex-col">
        <h2
          class="text-gray-900 text-lg text-center font-medium title-font mb-5"
        >
          Вход
        </h2>
        <input
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
          placeholder="Почта"
          type="email"
        />
        <input
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
          placeholder="Пароль"
          type="password"
        />
        <button class="btn-primary text-lg mb-5">
          <nuxt-link to="/doctor">Войти</nuxt-link>
        </button>
        <p class="flex justify-between text-xs text-gray-500 mt-3">
          <nuxt-link to="/">Забыли пароль?</nuxt-link>
          <nuxt-link to="/registration">Регистрация</nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
/* .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
} */
</style>
