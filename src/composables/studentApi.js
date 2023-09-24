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
  const createStudent = async (formData) => {
    studentData.value = []
    errorMessage.value = null
    try {
      const config = {
        method:'POST',
        url: url,
        headers:{
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(formData)
      }
      const res = await axios(config)
      studentData.value = res.data
    } catch (err) {
      errorMessage.value =err.message
    }
  }
  const updateStudentData = async (id, data) => {
    studentData.value = []
    errorMessage.value = null
    try {
      const config = {
        method:'PUT',
        url: url + "/" + id,
        headers:{
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      }
      const res = await axios(config)
      studentData.value = res.data
    } catch (err) {
      errorMessage.value =err.message
    }
  }

  const deleteStudent = async (id) =>{
    studentData.value = []
    errorMessage.value = null
    try {
      const config = {
        method:'DELETE',
        url: url + "/" + id,
        headers:{
          'Content-Type': 'application/json'
        },
      }
      const res = await axios(config)
      studentData.value = res.data
    } catch (err) {
      errorMessage.value =err.message
    }
  }

  return {
    getAllStudents,
    getStudent,
    createStudent,
    updateStudentData,
    deleteStudent,
    studentData,
    errorMessage,
  };
}
