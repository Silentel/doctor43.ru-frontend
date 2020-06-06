<template>
  <div>
    <h2 class="md:mb-5">
      Расписание
      <button class="ml-auto" @click="showSettings">
        <font-awesome-icon icon="cog" size="xs" />
      </button>
    </h2>
    <FullCalendar
      ref="fullCalendar"
      :key="calendarKey"
      :options="calendarOptions"
    >
      <template v-slot:eventContent="arg">
        <div v-if="arg.event.title" class="flex flex-col">
          <div class="flex px-1 pt-1 items-center">
            <font-awesome-icon :icon="arg.event.extendedProps.icon" />
            <b class="ml-2">{{ arg.timeText }}</b>
            <div class="ml-auto">
              <font-awesome-icon icon="ellipsis-v" @click="showEvent" />
            </div>
          </div>
          <div>
            {{ arg.event.extendedProps.branch }}
            {{ arg.event.extendedProps.place }}
          </div>
        </div>
      </template>
    </FullCalendar>
    <modal name="settings" :width="300" height="auto" :adaptive="true">
      <div class="flex flex-col w-full h-full p-2">
        <div class="flex">
          <span class="font-medium mb-8">Настройки рабочего времени</span>
          <font-awesome-icon
            class="cursor-pointer ml-auto"
            icon="times"
            @click="hideSettings"
          />
        </div>
        <div class="flex flex-col justify-between">
          <div>
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
              for="begin"
            >
              Начало рабочего дня
            </label>
            <div class="relative mb-4">
              <datetime
                v-model="schedule.start"
                type="time"
                class="theme"
                input-class="input w-full"
                placeholder="Выберите дату"
                value-zone="Europe/Moscow"
                :phrases="{ ok: 'Ок', cancel: 'Отмена' }"
                :minute-step="5"
                :min-datetime="schedule.minTime"
                :max-datetime="schedule.maxTime"
                auto
              ></datetime>
            </div>
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
              for="end"
            >
              Конец рабочего дня
            </label>
            <div class="relative mb-4">
              <datetime
                v-model="schedule.end"
                type="time"
                class="theme"
                input-class="input w-full"
                placeholder="Выберите дату"
                value-zone="Europe/Moscow"
                :phrases="{ ok: 'Ок', cancel: 'Отмена' }"
                :minute-step="5"
                :min-datetime="schedule.minTime"
                :max-datetime="schedule.maxTime"
                auto
              ></datetime>
            </div>
          </div>
          <div>
            <button class="btn btn-primary w-full" @click="saveSettings">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </modal>
    <modal
      name="event-settings"
      :width="300"
      height="auto"
      :adaptive="true"
      @before-open="beforeOpenEventSettings"
    >
      <div class="flex flex-col w-full h-full p-2">
        <div class="flex">
          <span class="font-medium mb-8">Настройки события</span>
          <font-awesome-icon
            class="cursor-pointer ml-auto"
            icon="times"
            @click="hideEvent"
          />
        </div>
        <div class="flex flex-col justify-between">
          <div>
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
              for="begin"
            >
              Начало события
            </label>
            <div class="relative mb-4">
              <datetime
                v-model="event.start"
                type="datetime"
                class="theme"
                input-class="input w-full"
                placeholder="Выберите дату"
                value-zone="Europe/Moscow"
                :phrases="{ ok: 'Ок', cancel: 'Отмена' }"
                :minute-step="5"
                :min-datetime="new Date().toISOString()"
                auto
              ></datetime>
            </div>
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
              for="end"
            >
              Конец события
            </label>
            <div class="relative mb-4">
              <datetime
                v-model="event.end"
                type="datetime"
                class="theme"
                input-class="input w-full"
                placeholder="Выберите дату"
                value-zone="Europe/Moscow"
                :phrases="{ ok: 'Ок', cancel: 'Отмена' }"
                :minute-step="5"
                :min-datetime="new Date().toISOString()"
                auto
              ></datetime>
            </div>
          </div>
          <div>
            <button class="btn btn-error w-full mb-2" @click="removeEvent">
              Отменить
            </button>
            <button class="btn btn-primary w-full" @click="saveEvent">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </modal>
    <modal
      name="waiting-list"
      :width="400"
      height="auto"
      :adaptive="true"
      @before-open="beforeOpenWaitingList"
    >
      <div class="flex flex-col w-full h-full p-2">
        <div class="flex">
          <span class="font-medium mb-8">Лист ожидания</span>
          <font-awesome-icon
            class="cursor-pointer ml-auto"
            icon="times"
            @click="hideWaitingList"
          />
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col mb-4">
            <div v-if="newEvents.length !== 0" class="flex flex-col mb-4">
              <label v-for="item in newEvents" :key="item.id"
                ><input
                  :id="item.id"
                  v-model="checkedEvent"
                  class="mr-2"
                  type="radio"
                  :value="item"
                />
                <font-awesome-icon
                  class="mr-1"
                  :icon="item.extendedProps.icon"
                />
                Имя пациента {{ item.id }}
              </label>
            </div>
            <div v-else>Нет записей</div>
            <div v-if="checkedEvent">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
                for="begin"
              >
                Начало события
              </label>
              <div class="relative mb-4">
                <datetime
                  v-model="event.start"
                  type="datetime"
                  class="theme"
                  input-class="input w-full"
                  placeholder="Выберите дату"
                  value-zone="Europe/Moscow"
                  :phrases="{ ok: 'Ок', cancel: 'Отмена' }"
                  :minute-step="5"
                  :min-datetime="new Date().toISOString()"
                  auto
                ></datetime>
              </div>
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
                for="end"
              >
                Конец события
              </label>
              <div class="relative mb-4">
                <datetime
                  v-model="event.end"
                  type="datetime"
                  class="theme"
                  input-class="input w-full"
                  placeholder="Выберите дату"
                  value-zone="Europe/Moscow"
                  :phrases="{ ok: 'Ок', cancel: 'Отмена' }"
                  :minute-step="5"
                  :min-datetime="event.start"
                  auto
                ></datetime>
              </div>
            </div>
          </div>
          <div>
            <button
              class="btn btn-primary w-full"
              :disabled="validAddEventForm"
              @click="saveFromList"
            >
              Записать
            </button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap'
// import { toDateTime } from '@fullcalendar/luxon'
import ruLocale from '@fullcalendar/core/locales/ru'
// import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

export default {
  layout: 'lk',
  components: {
    FullCalendar,
    // VueTimepicker,
    Datetime
  },
  data() {
    return {
      newEvents: [
        {
          id: '5',
          title: 'Консультация',
          start: '2020-06-07T08:00:00',
          end: '2020-06-07T09:00:00',
          extendedProps: {
            patient_id: '1',
            icon: 'microphone',
            branch: '',
            place: ''
          }
        },
        {
          id: '6',
          title: 'Какое-то событие',
          start: '2020-06-06T14:00:00',
          end: '2020-06-06T14:30:00',
          extendedProps: {
            patient_id: '1',
            icon: 'clinic-medical',
            branch: 'филиал',
            place: 'кабинет'
          }
        }
      ],
      calendarKey: '',
      schedule: {
        start: '07:00',
        end: '20:00',
        minTime: '07:00',
        maxTime: '20:00'
      },
      event: {
        start: '',
        end: ''
      },
      selectedDate: null,
      selectedEvent: null,
      checkedEvent: '',
      toCard: true,
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          bootstrapPlugin
        ],
        locale: ruLocale,
        // themeSystem: 'bootstrap',
        contentHeight: 'auto',
        headerToolbar: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        initialView: 'timeGridWeek',
        rerenderDelay: 500,
        weekends: true,
        allDaySlot: false,
        slotDuration: '00:30:00',
        slotMinTime: '07:00',
        slotMaxTime: '20:00',
        slotLabelInterval: '00:30',
        slotLabelFormat: {
          hour: 'numeric',
          minute: 'numeric'
        },
        slotEventOverlap: false,
        eventColor: '#057436',
        events: [
          {
            start: '2020-06-04T08:00:00',
            end: '2020-06-04T16:00:00',
            display: 'background',
            backgroundColor: 'purple'
          },
          {
            start: '2020-06-05T12:00:00',
            end: '2020-06-05T20:00:00',
            display: 'background',
            backgroundColor: 'green'
          },
          {
            id: '1',
            title: 'Консультация',
            start: '2020-06-03T08:00:00',
            end: '2020-06-03T09:00:00',
            extendedProps: {
              patient_id: '1',
              icon: 'microphone',
              branch: '',
              place: ''
            }
          },
          {
            id: '2',
            title: '2',
            start: '2020-06-04T14:00:00',
            end: '2020-06-04T14:20:00',
            extendedProps: {
              patient_id: '1',
              icon: 'video',
              branch: '',
              place: ''
            }
          },
          {
            id: '3',
            title: '3',
            start: '2020-06-03T09:00:00',
            end: '2020-06-03T11:15:00',
            extendedProps: {
              patient_id: '1',
              icon: 'clinic-medical',
              branch: 'филиал',
              place: 'кабинет'
            }
          },
          {
            id: '4',
            title: '4',
            start: '2020-06-03T14:00:00',
            end: '2020-06-03T15:20:00',
            extendedProps: {
              patient_id: '1',
              icon: 'clinic-medical',
              branch: 'филиал',
              place: 'кабинет'
            }
          }
        ],
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        windowResize: this.handleWindowResize
      }
    }
  },
  computed: {
    validAddEventForm() {
      return this.checkedEvent === '' || this.event.end === ''
    }
  },
  mounted() {
    this.handleWindowResize()
  },
  methods: {
    showSettings() {
      this.$modal.show('settings')
    },
    hideSettings() {
      this.$modal.hide('settings')
    },
    saveSettings() {
      // const calendarApi = this.$refs.fullCalendar.getApi()
      this.calendarOptions.slotMinTime = this.schedule.start.slice(11, 16)
      this.calendarOptions.slotMaxTime = this.schedule.end.slice(11, 16)
      // calendarApi.render()
      this.calendarKey = this.schedule.start + this.schedule.end
      this.hideSettings()
    },
    beforeOpenEventSettings(event) {
      this.toCard = false
      this.event.start = ''
      this.event.end = ''
    },
    showEvent() {
      this.$modal.show('event-settings')
    },
    hideEvent() {
      this.$modal.hide('event-settings')
    },
    removeEvent() {
      for (let i = 0; i < this.calendarOptions.events.length; i++) {
        if (this.calendarOptions.events[i].id === this.selectedEvent.id) {
          this.calendarOptions.events.splice(i, 1)
        }
      }
      this.calendarKey = this.selectedEvent.id
      this.toCard = true
      this.hideEvent()
    },
    saveEvent() {
      const evId = this.calendarOptions.events.find(
        (ev) => ev.id === this.selectedEvent.id
      )
      if (evId) {
        this.calendarOptions.events[evId.id - 1].start = this.event.start
        this.calendarOptions.events[evId.id - 1].end = this.event.end
        this.calendarKey = this.event.start + this.event.end
        this.toCard = true
        this.hideEvent()
      }
    },
    beforeOpenWaitingList() {
      this.event.end = ''
    },
    showWaitingList() {
      this.$modal.show('waiting-list')
    },
    hideWaitingList() {
      this.$modal.hide('waiting-list')
    },
    saveFromList() {
      for (let i = 0; i < this.newEvents.length; i++) {
        if (this.newEvents[i].id === this.checkedEvent.id) {
          this.newEvents.splice(i, 1)
        }
      }
      this.checkedEvent.start = this.event.start
      this.checkedEvent.end = this.event.end
      this.calendarKey = this.event.start + this.event.end
      this.calendarOptions.events.push(this.checkedEvent)
      this.checkedEvent = ''
      this.hideWaitingList()
    },
    handleDateClick(arg) {
      this.event.start = arg.dateStr
      this.showWaitingList()
    },
    handleEventClick(event) {
      this.selectedEvent = event.event
      const calendarApi = this.$refs.fullCalendar.getApi()
      const ev = calendarApi.getEventById(event.event.id)
      this.event.start = new Date(ev.start).toISOString()
      this.event.end = new Date(ev.end).toISOString()
      if (this.toCard) {
        this.toCard = true
        this.$router.push('/lk/card')
      }
    },
    handleWindowResize() {
      if (window.innerWidth <= 768) {
        this.calendarOptions.initialView = 'timeGridDay'
        this.calendarOptions.slotDuration = '00:15:00'
        this.calendarKey = window.innerWidth
      } else {
        this.calendarOptions.initialView = 'timeGridWeek'
        this.calendarOptions.slotDuration = '00:05:00'
        this.calendarKey = window.innerWidth
      }
    }
  }
}
</script>

<style></style>
