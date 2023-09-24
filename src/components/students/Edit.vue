<template>
  <div class="sticky top-0 z-40 lg:mx-auto lg:px-8 bg-white p-5">
    <Breadcrumb :pages="breadcrumb" />
  </div>
  <form class="m-6 bg-slate-100 p-6" @submit.prevent="handleUpdateFormData">
    <div class="">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Personal Information
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p>
    </div>
    <div
      v-if="errorMessage"
      class="m-5 flex items-center bg-red-100 p-5 text-red-500"
    >
      {{ errorMessage }}
    </div>
    <div v-else>
      <div
        class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 border-b border-gray-900/10 pb-12 sm:grid-cols-6"
      >
        <div class="sm:col-span-3">
          <label
            for="id"
            class="block text-sm font-medium leading-6 text-gray-900"
            >ID</label
          >
          <div class="mt-2">
            <input
              type="text"
              v-model.trim="studentData.id"
              name="id"
              id="id"
              disabled
              class="block h-10 w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >First name</label
          >
          <div class="mt-2">
            <input
              type="text"
              v-model.trim="studentData.firstName"
              name="first-name"
              id="first-name"
              class="block h-10 w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="last-name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Last name</label
          >
          <div class="mt-2">
            <input
              type="text"
              v-model.trim="studentData.lastName"
              name="last-name"
              id="last-name"
              class="block h-10 w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              v-model.trim="studentData.email"
              name="email"
              type="email"
              autocomplete="email"
              class="block h-10 w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label
            for="phoneNumber"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Phone Number
          </label>
          <div class="mt-2">
            <input
              id="phoneNumber"
              v-model.trim="studentData.phoneNumber"
              name="phoneNumber"
              type="number"
              autocomplete="phoneNumber"
              class="block h-10 w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
          @click="goBack"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import useStudent from "../../composables/studentApi";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
import Breadcrumb from "../common/Breadcrumb.vue";

const { getStudent, updateStudentData, studentData, errorMessage } =
  useStudent();
const { params } = useRoute();

onMounted(() => {
  getStudent(params.id);
});
const handleUpdateFormData = () => {
  updateStudentData(params.id, studentData.value);
  console.log("Updated");
};
const breadcrumb = [
  { name: "Home", href: "/", current: false },
  { name: "Edit", href: `/edit/${params.id}`, current: true },
];

const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped></style>
