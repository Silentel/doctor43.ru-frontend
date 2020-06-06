<template>
  <div>
    <h2 class="md:mb-5">
      Техническая поддержка
    </h2>
    <div class="leading-loose mb-4">
      Если у вас возник вопрос, или вы заметили ошибку в работе сервиса,
      напишите в техническую поддержку. Мы ответим вам в течение суток в рабочие
      дни.
    </div>
    <div class="w-full flex flex-col">
      <input class="input" type="text" name="title" placeholder="Заголовок" />
      <input
        class="input"
        type="text"
        name="tex"
        placeholder="Текст сообщения"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'lk'
}
</script>

<style></style>
