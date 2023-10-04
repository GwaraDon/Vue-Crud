<template>
  <div class="sticky top-0 z-40 bg-white p-5 lg:mx-auto lg:px-8">
    <Breadcrumb :pages="breadcrumb" />
  </div>
  <Form
    class="m-6 bg-slate-100 p-6"
    @submit="handleFormData"
    :validation-schema="schema"
  >
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Personal Information
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >First name</label
          >
          <div class="mt-2">
            <Field
              type="text"
              name="firstName"
              class="block h-10 w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage
              name="firstName"
              as="small"
              class="text-xs text-red-600"
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
            <Field
              type="text"
              name="lastName"
              class="block h-10 w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage
              name="lastName"
              as="small"
              class="text-xs text-red-600"
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
            <Field
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="block h-10 w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage
              name="email"
              as="small"
              class="text-xs text-red-600"
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
            <Field
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              autocomplete="phoneNumber"
              class="block h-10 w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage
              name="phoneNumber"
              as="small"
              class="text-xs text-red-600"
            />
          </div>
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
        Save
      </button>
    </div>
    <Toast :show="isToastShow" toast-message="Redirecting to list page" toast-title="Successfully saved!!!"/>
  </Form>
</template>

<script setup>
import { ref } from "vue";
import useStudent from "../../composables/studentApi";
import Breadcrumb from "../common/Breadcrumb.vue";
import { useRouter } from "vue-router";
import Toast from "../common/Toast.vue";
import { object, string, number } from "yup";
import { Form, Field, ErrorMessage, validate } from "vee-validate";

const { createStudent } = useStudent();


const isToastShow = ref(false);
const handleFormData = async (values) => {
  const validationResult = await validate(schema);
  if (validationResult.valid) {
    await createStudent(values);
    isToastShow.value = true; 
    setTimeout(() => {
      router.push({ path: "/" });
    }, 3000);
  } else {   
    console.error("Form validation failed:", validationResult.errors);
  }
};
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
const breadcrumb = [
  { name: "Home", href: "/", current: false },
  { name: "Create", href: "/create", current: true },
];
const schema = object({
  firstName: string().required("First Name is required field"),
  lastName: string().required("This field is required field"),
  email: string().email().required("This field is required field"),
  phoneNumber: number()
    .required("This field is required field")
    .min(10, "must be at least 10 characters long"),
});
</script>

<style lang="scss" scoped></style>
