import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  function decrement() {
    if(count.value > 1){
        count.value--;
    }
    else{
        alert('Count number unavailable')
    }
  }

  return { count, name, doubleCount, increment, decrement };
});
