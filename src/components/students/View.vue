<template>
  <div class="px-4 sm:px-6 lg:px-8">
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
        <tr>
          <td>{{ studentData.id }}</td>
          <td>{{ studentData.name }}</td>
          <td>{{ studentData.email }}</td>
          <td>{{studentData.phoneNumber}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import useStudent from "../../composables/studentApi";

const route = useRoute();
const { getStudent, studentData } = useStudent();
onMounted(() => {
  getStudent(route.params.id);
});
</script>

<style lang="scss" scoped></style>
