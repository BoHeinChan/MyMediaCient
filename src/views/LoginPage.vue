<template>
  <div class="text-center">
    <router-link to="/" class="btn btn-primary mb-4 mr-4">Home</router-link>
    <router-link to="/login" class="btn btn-dark mb-4 me-4">Login</router-link>
  </div>
  <div class="container w-50 bg-primary p-5 rounded my-5">
    <h1 class="text-center fw-bolder text-white">Login</h1>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" v-model="userData.email" />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="userData.password"
        @keypress.enter="login()"
      />
    </div>
    <button class="btn btn-warning" @click="login()">Login</button>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      let data = await axios.post("http://127.0.0.1:8000/api/admin/login", this.userData);
      if (data.data.token == null) {
        console.log("there is no user");
      } else {
        this.$store.dispatch("setToken", data.data.token);
        this.$store.dispatch("setUser", data.data.data);
        this.$router.push("/");
      }
    },
  },
  computed: {
    ...mapGetters(["getToken", "getUser"]),
  },
};
</script>
