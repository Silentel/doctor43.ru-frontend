<template>
  <section class="flex flex-auto text-gray-700 body-font">
    <div class="container px-5 mx-auto flex justify-center items-center">
      <div class="bg-gray-300 rounded-lg p-2 md:p-8 flex flex-col">
        <h2
          class="text-gray-900 text-lg text-center font-medium title-font mb-5"
        >
          Регистрация
        </h2>
        <input
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
          placeholder="Почта"
          type="email"
        />
        <input
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
          placeholder="ФИО"
          type="text"
        />
        <input
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
          placeholder="Пароль"
          type="password"
        />
        <button class="btn-primary text-lg mb-5">
          Зарегистрироваться
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Уже зарегистрированы?
          <nuxt-link class="text-gray-700" to="/login">Войти</nuxt-link>
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
