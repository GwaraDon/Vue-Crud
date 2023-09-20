<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
        <p class="mt-2 text-sm text-gray-700">
          A list of all the users in your account including their name, title,
          email and role.
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <router-link
          to="/create"
          type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Add user</router-link
        >
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  ID
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Email
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Phone
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Action buttons</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr
                v-for="({ id, name, email, phoneNumber }, index) in studentData"
                :key="index"
              >
                <td class="px-3 py-3.5">{{ id }}</td>
                <td class="px-3 py-3.5">{{ name }}</td>
                <td class="px-3 py-3.5">{{ email }}</td>
                <td class="px-3 py-3.5">{{ phoneNumber }}</td>
                <td class="px-3 py-3.5">
                  <div class="flex items-center gap-1">
                    <router-link
                      :to="{ name: 'view', params: { id: id } }"
                      href="#"
                      class="block h-4 w-4 text-indigo-600 hover:text-indigo-900"
                    >
                      <EyeIcon />
                      <span class="sr-only">View</span></router-link
                    >
                    <router-link
                      :to="{ name: 'edit', params: { id: id } }"
                      href="#"
                      class="block h-4 w-4 text-indigo-600 hover:text-indigo-900"
                    >
                      <PencilSquareIcon />
                      <span class="sr-only">Edit</span></router-link
                    >
                    <a
                      href="#"
                      class="block h-4 w-4 text-indigo-600 hover:text-indigo-900"
                      ><TrashIcon /> <span class="sr-only">Delete</span></a
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/vue/20/solid";
import useStudent from "../../composables/studentApi";

const { getAllStudents, studentData } = useStudent();

onMounted(() => {
  getAllStudents();
});
</script>
