<template>
  <div class="m-6 bg-slate-100 p-6">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
        <p class="mt-2 text-sm text-gray-700">
          A list of all the users in your account including their name, title,
          email and role.
          {{ storeCounter.count }}
          <button class="flex" @click="storeCounter.increment">Add count</button>
          
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
        <div
          v-if="errorMessage"
          class="m-5 flex items-center bg-red-100 p-5 text-red-500"
        >
          {{ errorMessage }}
        </div>
        <div
          v-if="studentData.length"
          class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
        >
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
              <template v-if="studentData.length">
                <tr
                  v-for="(
                    { id, firstName, lastName, email, phoneNumber }, index
                  ) in paginatedPosts"
                  :key="index"
                >
                  <td class="px-3 py-3.5">{{ id }}</td>
                  <td class="px-3 py-3.5">{{ firstName }} {{ lastName }}</td>
                  <td class="px-3 py-3.5">{{ email }}</td>
                  <td class="px-3 py-3.5">{{ phoneNumber }}</td>
                  <td class="px-3 py-3.5">
                    <div class="flex items-center gap-1">
                      <router-link
                        :to="{ name: 'view', params: { id: id } }"
                        class="block h-4 w-4 text-indigo-600 hover:text-indigo-900"
                      >
                        <EyeIcon />
                        <span class="sr-only">View</span></router-link
                      >
                      <router-link
                        :to="{ name: 'edit', params: { id: id } }"
                        class="block h-4 w-4 text-indigo-600 hover:text-indigo-900"
                      >
                        <PencilSquareIcon />
                        <span class="sr-only">Edit</span></router-link
                      >
                      <span
                        @click="handleDelete(id)"
                        class="block h-4 w-4 text-indigo-600 hover:text-indigo-900"
                        ><TrashIcon /> <span class="sr-only">Delete</span></span
                      >
                    </div>
                  </td>
                </tr>
              </template>
              <tr v-else>
                <td colspan="5" class="text-center text-slate-500">
                  No data found
                </td>
              </tr>
            </tbody>
          </table>
          <pagination
            :current-page="currentPage"
            :total-pages="totalPages"
            @update-page="updatePage"
          ></pagination>
        </div>
      </div>
    </div>
    <DeleteModal :open="isDeleteModalOpen" @close-modal="hideDeleteModal" :delete-id="deleteId" />
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/vue/20/solid";
import useStudent from "../../composables/studentApi";
import Pagination from "../common/Pagination.vue";
import DeleteModal from "../common/DeleteModal.vue"
import { useCounterStore } from "@/store/index"

const { getAllStudents, studentData, deleteStudent, errorMessage } =
  useStudent();

onMounted(() => {
  getAllStudents();
});
const storeCounter = useCounterStore();
const currentPage = ref(1);
const perPage = 10;
const totalPages = computed(() => {
  return Math.ceil(studentData.value.length / perPage);
});

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  return studentData.value.slice(startIndex, endIndex);
});
const isDeleteModalOpen = ref(false)
const deleteId =  ref(0)
const handleDelete = (id) => {
  isDeleteModalOpen.value = true
  deleteId.value = id
};
const hideDeleteModal = () =>{
  isDeleteModalOpen.value = false
  getAllStudents()
}
const updatePage = (newPage) => {
  currentPage.value = newPage;
};
</script>
