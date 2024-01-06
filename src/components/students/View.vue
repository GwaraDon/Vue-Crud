<template>
  <div class="sticky top-0 z-40 bg-white p-5 lg:mx-auto lg:px-8">
    <Breadcrumb :pages="breadcrumb" />
  </div>
  <div class="px-4 sm:px-6 lg:px-8">
    <div
      v-if="errorMessage"
      class="m-5 flex items-center bg-red-100 p-5 text-red-500"
    >
      {{ errorMessage }}
    </div>

    <div class="bg-white p-6" v-else>
      <div class="relative mx-auto max-w-2xl lg:mx-0">
        <figure class="flex flex-col gap-6">
          <figcaption class="mt-6 space-y-4 text-base text-gray-600">
            <div class="text-xl font-semibold text-black">
              {{ studentData.firstName }} {{ studentData.lastName }}
            </div>
            <div class="">{{ studentData.email }}</div>
            <div class="">{{ studentData.phoneNumber }}</div>
            <div>
              {{ count }}
              {{ doubleCount }}
            </div>
            <button class="flex" @click="storeCounter.increment">
              add count
            </button>
            <button class="flex" @click="storeCounter.decrement">
              remove count
              {{ isReset }}
            </button>
            <button v-if="isReset" class="flex" @click="reset">
              reset store
            </button>
          </figcaption>
          <blockquote
            class="mt-6 text-lg font-semibold sm:text-xl sm:leading-8"
          >
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <div class="flex gap-6">
            <button
              type="button"
              class="hover:opactiy-90 h-10 rounded-lg bg-gray-200 px-6 py-2 text-sm font-semibold leading-6 text-indigo-500 transition-all focus:outline-none"
              @click="goBack"
            >
              Go To List
            </button>
            <button
              type="button"
              class="hover:opactiy-90 h-10 rounded-lg bg-indigo-500 px-6 py-2 text-sm font-semibold leading-6 text-gray-900 text-white transition-all focus:outline-none"
              @click="goToEdit"
            >
              Edit
            </button>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted,computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import useStudent from "../../composables/studentApi";
import Breadcrumb from "../common/Breadcrumb.vue";
import { useCounterStore } from "@/store/index";
import { storeToRefs } from "pinia";

const storeCounter = useCounterStore();
const { count,doubleCount,isReset } = storeToRefs(storeCounter);

const reset = () => {
  count.value= 0;
  doubleCount.value = 0
  isReset.value = false
}
const route = useRoute();
const { getStudent, studentData, errorMessage } = useStudent();
onMounted(() => {
  getStudent(route.params.id);
});
const { params } = useRoute();
const breadcrumb = [
  { name: "Home", href: "/", current: false },
  { name: "View", href: `/view/${params.id}`, current: true },
];
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
const goToEdit = () => {
  router.push({ path: `/edit/${params.id}` });
};
</script>

<style lang="scss" scoped></style>
