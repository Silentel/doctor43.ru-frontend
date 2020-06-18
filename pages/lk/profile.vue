<template>
  <div>
    <h2 class="md:mb-5">
      Профиль
    </h2>
    <div class="flex">
      <div class="w-1/4 hidden md:block rounded-full">
        <img
          class=""
          src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1704/tuktukdesign170400042/76258340-doctor-icon-physician-person-with-stethoscope-and-cross-profile-avatar-in-glyph-pictogram-vector-ill.jpg?ver=6"
          alt="Photo"
        />
      </div>
      <ul class="w-full leading-loose mb-2">
        <li class="flex items-center justify-between border-b py-2">
          <span>Фамилия</span>
          <span class="font-medium">Сычёва</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Имя</span>
          <span class="font-medium">Ольга</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Отчество</span>
          <span class="font-medium">Алексеевна</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Город</span>
          <span class="font-medium">Киров</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Личный кабинет</span>
          <span class="font-medium">Активирован</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Специализация</span>
          <span class="font-medium">Врач-невролог</span>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Место работы</span>
          <div class="flex">
            <span class="font-medium">Центральная поликлиника "Лайт"</span>
            <button
              class="btn-primary px-2 ml-2 text-white rounded transition duration-500 ease-in-out"
              @click="$router.push('/lk/jobs')"
            >
              <font-awesome-icon icon="plus" />
            </button>
          </div>
        </li>
        <li class="flex items-center justify-between border-b py-2">
          <span>Пациенты</span>
          <span class="font-medium">Взрослые</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'lk'
}
</script>

<style></style>
