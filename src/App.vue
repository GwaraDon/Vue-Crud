<template>
  <header>
    <div class="wrapper">
      <nav class="flex flex-wrap p-4 pt-2">
        <RouterLink to="/edit/2" class="p-3 pb-4">Edit</RouterLink>
        <RouterLink to="/create" class="p-3 pb-4">Create</RouterLink>
        <RouterLink to="/view/1" class="p-3 pb-4">View</RouterLink>
        <RouterLink to="/list" class="p-3 pb-4">List</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<style scoped></style>
