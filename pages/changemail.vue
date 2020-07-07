<template>
  <section class="flex flex-auto text-gray-700">
    <div class="container px-5 py-2 mx-auto flex justify-center items-center">
      <div class="bg-gray-300 rounded-lg shadow-md p-2 md:p-8 flex flex-col">
        <h2 class="mb-5">
          Почта успешно изменена
        </h2>
        <button
          class="btn btn-primary text-lg mb-5 focus:outline-none"
          @click="$router.push('/login')"
        >
          Войти в личный кабинет
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
