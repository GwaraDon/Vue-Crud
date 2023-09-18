<template>
  <div>
    <h2>Create Post</h2>
    <form @submit.prevent="createPost">
      <input v-model="title" placeholder="Title" />
      <input v-model="body" placeholder="Body" />
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    async createPost() {
      try {
        const response = await axios.post("http://localhost:3000/posts", {
          title: this.title,
          body: this.body,
        });
        console.log(response.data);
        // Reset form fields
        this.title = "";
        this.body = "";
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
