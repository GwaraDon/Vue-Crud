<template>
  <nav aria-label="pagination" class="flex justify-end items-center p-3 pb-0  bg-white ">
    <div>
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span v-for="pageNumber in pageNumbers" :key="pageNumber">
      <button
        @click="goToPage(pageNumber)"
        class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        :class="{ 'active': currentPage === pageNumber }"
      >{{ pageNumber }}</button>
    </span>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      Next
    </button>
  </div>
    <span class="text-sm text-slate-500">Page {{ currentPage }} of {{ totalPages }}</span>
  </nav>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
    default: 1,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update-page"]);

const prevPage = () => {
  if (props.currentPage > 0) {
    emit("update-page", props.currentPage - 1);
  }
};

const nextPage = () => {
  console.log('hello')
  if (props.currentPage < props.totalPages) {
    emit("update-page", props.currentPage + 1);
    
  }
};
const pageNumbers = computed(() => {
  const numbers = [];
  for (let i = 1; i <= props.totalPages; i++) {
    numbers.push(i);
  }
  return numbers;
});

const goToPage = (pageNumber) => {
  if (pageNumber !== props.currentPage) {
    emit('update-page', pageNumber);
  }
};
</script>

<style scoped>
.pagination {
  text-align: center;
  margin-top: 20px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}

button[disabled] {
  cursor: not-allowed;
}
</style>
