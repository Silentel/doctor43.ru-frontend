<template>
  <div v-if="user">
    <ul class="leading-loose mb-2">
      <li class="flex items-center justify-between border-b py-2">
        <span
          >E-mail
          <span v-if="confirmedMail" class="text-secondary">(подтвержден)</span>
          <span v-else class="text-primary">(ожидает подтверждения)</span>
        </span>
        <input
          v-model="email"
          type="text"
          class="input w-2/4"
          :placeholder="user.email"
        />
      </li>
      <li class="flex items-center justify-between py-2">
        <span>Мобильный телефон </span>
        <input
          v-model="phone"
          type="text"
          class="input w-2/4"
          :placeholder="user.phone"
        />
      </li>
      <li class="flex items-center justify-between border-b py-2">
        <span>Пароль</span>
        <input v-model="password" type="password" class="input w-2/4" />
      </li>
      <li class="flex items-center justify-between border-b py-2">
        <span>Фамилия</span>
        <input
          v-model="lastName"
          type="text"
          class="input w-2/4"
          :placeholder="user.last_name"
        />
      </li>
      <li class="flex items-center justify-between border-b py-2">
        <span>Имя</span>
        <input
          v-model="firstName"
          type="text"
          class="input w-2/4"
          :placeholder="user.first_name"
        />
      </li>
      <li class="flex items-center justify-between border-b py-2">
        <span>Отчество</span>
        <input
          v-model="middleName"
          type="text"
          class="input w-2/4"
          :placeholder="user.middle_name"
        />
      </li>
      <li class="flex items-center justify-between border-b py-2">
        <span>Пол</span>
        <select id="sex" v-model="sex" class="select w-2/4">
          <option value="MALE">Мужской</option>
          <option value="FEMALE">Женский</option>
        </select>
      </li>
      <li class="flex items-center justify-between border-b py-2">
        <span>Дата рождения</span>
        <input
          v-model="birthday"
          type="date"
          class="input w-2/4"
          :placeholder="user.birthday"
        />
      </li>
      <li class="flex items-center justify-between border-b py-2">
        <span>Временная зона</span>
        <select id="timezone" v-model="timezone" class="select w-2/4">
          <option :value="user.timezone" disabled selected>{{
            user.timezone
          }}</option>
          <option v-for="zone in timezones" :key="zone">{{ zone }}</option>
        </select>
      </li>
    </ul>
    <div class="w-full flex">
      <button class="btn btn-primary ml-auto">Сохранить</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      confirmedMail: false,
      email: null,
      phone: null,
      password: null,
      firstName: null,
      lastName: null,
      middleName: null,
      sex: null,
      birthday: null,
      timezone: '',
      timezones: [
        'Asia/Anadyr',
        'Asia/Barnaul',
        'Asia/Chita',
        'Asia/Irkutsk',
        'Asia/Kamchatka',
        'Asia/Khandyga',
        'Asia/Krasnoyarsk',
        'Asia/Magadan',
        'Asia/Novokuznetsk',
        'Asia/Novosibirsk',
        'Asia/Omsk',
        'Asia/Sakhalin',
        'Asia/Srednekolymsk',
        'Asia/Tomsk',
        'Asia/Ust-Nera',
        'Asia/Vladivostok',
        'Asia/Yakutsk',
        'Asia/Yekaterinburg',
        'Europe/Astrakhan',
        'Europe/Kaliningrad',
        'Europe/Kirov',
        'Europe/Moscow',
        'Europe/Samara',
        'Europe/Saratov',
        'Europe/Ulyanovsk',
        'Europe/Volgograd'
      ]
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  },
  methods: {
    async update() {
      const formData = {
        jsonrpc: '2.0',
        method: 'update_me',
        params: {
          first_name: this.firstName,
          last_name: this.lastName,
          middle_name: this.middleName,
          sex: this.sex,
          birthday: this.birthday,
          timezone: this.timezone
        }
      }

      await this.$store.dispatch('user/updateInfo', formData)

      this.$toast.success('Изменения успешно сохранены', {
        position: 'bottom-center',
        duration: 2000
      })
    }
  }
}
</script>

<style></style>
