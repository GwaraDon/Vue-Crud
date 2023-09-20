import { ref } from "vue";
import axios from "axios";

export default function useStudent() {
  const url = "http://localhost:3000/students";
  const studentData = ref([]);
  const errorMessage = ref(null);

  const getAllStudents = async () => {
    studentData.value = [];
    errorMessage.value = null;
    try {
      const res = await axios.get(url);
      studentData.value = res.data;
    } catch (err) {
      console.log(err);
      errorMessage.value = err.message;
    }
  };
  const getStudent = async (id) => {
    studentData.value = [];
    errorMessage.value = null;
    try {
      const res = await axios.get(url + "/" + id);
      studentData.value = res.data;
    } catch (err) {
      console.log(err);
      errorMessage.value = err.message;
    }
  };
  return {
    getAllStudents,
    getStudent,
    studentData,
    errorMessage,
  };
}
