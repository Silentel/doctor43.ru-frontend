<template>
  <section class="flex flex-auto text-gray-700">
    <div
      class="container px-5 mx-auto flex flex-col justify-center items-center"
    >
      <div
        class="bg-gray-300 rounded-lg shadow-md p-2 md:p-8 flex flex-col items-center"
      >
        <font-awesome-icon
          class="mb-4"
          icon="exclamation-circle"
          size="2x"
          color="red"
        />
        <h2 class="mb-4">
          Данной страницы не существует
        </h2>
        <nuxt-link class="btn btn-primary" to="/">На главную</nuxt-link>
      </div>
    </div>
  </section>
</template>
