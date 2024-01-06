import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);
  const isReset = ref(false)
  const increment = () => {
    count.value++;
    if(count.value > 0){
        isReset.value = true;
    }
  }
  const decrement = () => {
    if(count.value > 1){
        count.value--;
    }
    else{
        alert('Count number unavailable')
    }
  }

  const handleReset = () =>{
    isReset.value = !isReset.value;
  }
  const getUserById = (state) => {
    return (userId) => state.users.find((user) => user.id === userId)
  }

  return { count, name, doubleCount, increment, decrement,isReset,handleReset };
});

