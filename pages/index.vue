<template>
  <section class="flex flex-auto text-gray-700 body-font">
    <div class="container px-5 py-10 mx-auto flex flex-col flex-wrap">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 mb-5">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          Доктор Лайт
        </h1>
        <p class="leading-relaxed mt-4">
          Желаете быть здоровы и красивым? Получите онлайн консультацию докторов
          — терапевта, педиатра, гинеколога, эндокринолога и других
          специалистов.
        </p>
      </div>
      <div class="carousel relative shadow-2xl bg-white">
        <div class="carousel-inner relative overflow-hidden w-full">
          <!--Slide 1-->
          <input
            id="carousel-1"
            class="carousel-open"
            type="radio"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div class="carousel-item absolute opacity-0" style="height: 50vh;">
            <div
              class="block h-full w-full bg-primary text-white text-5xl text-center"
            >
              Онлайн консультация врача общей практики
            </div>
          </div>
          <label
            for="carousel-3"
            class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label
          >
          <label
            for="carousel-2"
            class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label
          >

          <!--Slide 2-->
          <input
            id="carousel-2"
            class="carousel-open"
            type="radio"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="carousel-item absolute opacity-0" style="height: 50vh;">
            <div
              class="block h-full w-full bg-secondary text-white text-5xl text-center"
            >
              Онлайн консультация педиатра (дети до 18 лет)
            </div>
          </div>
          <label
            for="carousel-1"
            class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label
          >
          <label
            for="carousel-3"
            class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label
          >

          <!--Slide 3-->
          <input
            id="carousel-3"
            class="carousel-open"
            type="radio"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="carousel-item absolute opacity-0" style="height: 50vh;">
            <div
              class="block h-full w-full bg-gray-500 text-white text-5xl text-center"
            >
              Онлайн консультация гинеколога
            </div>
          </div>
          <label
            for="carousel-2"
            class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label
          >
          <label
            for="carousel-1"
            class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label
          >

          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label
                for="carousel-1"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-2"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-3"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >•</label
              >
            </li>
          </ol>
        </div>
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
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0; /*Set to match the Tailwind colour you want the active one to be */
}
</style>
