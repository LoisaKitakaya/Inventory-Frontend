<template>
  <div class="home-page">
    <div class="section">
      <h1 class="title has-text-centered">Login</h1>
      <form class="box auth-form" @submit.prevent="submitForm">
        <div class="field">
          <label for="email" class="label">Email</label>
          <div class="control">
            <input
              type="email"
              class="input"
              name="email"
              placeholder="e.g. email@example.com"
              v-model="username"
            />
          </div>
        </div>
        <div class="field">
          <label for="password" class="label">Password</label>
          <div class="control">
            <input
              type="password"
              class="input"
              name="password"
              placeholder="**********"
              v-model="password"
            />
          </div>
        </div>
        <!-- handle errors -->
        <div class="notification is-danger is-light" v-if="errors.length">
          <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
        <!-- handle errors -->
        <br />
        <div class="field">
          <div class="control form-button">
            <button type="submit" class="button is-success">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "bulma-toast";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submitForm() {
      this.errors = [];

      if (this.username === "") {
        this.errors.push("Please provide a username-is required.");
      }

      if (this.password === "") {
        this.errors.push("Please provide password-is required.");
      }

      if (!this.errors.length) {
        axios.defaults.headers.common["Authorization"] = "";
        sessionStorage.removeItem("token");

        const formData = {
          username: this.username,
          password: this.password,
        };

        axios
          .post("/api-v1/token/login/", formData)
          .then((response) => {
            console.log(response.data);

            const token = response.data.auth_token;

            this.$store.commit("setToken", token);

            axios.defaults.headers.common["Authorization"] = "Token " + token;

            sessionStorage.setItem("token", token);

            this.$router.push("/");

            toast({
              message: "Successfully logged in.",
              type: "is-success",
              dismissible: true,
              pauseOnHover: true,
              duration: 3000,
              position: "bottom-right",
            });

            this.$router.push("/inventory");
          })
          .catch((error) => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(
                  `${property}:${error.response.data[property]}`
                );
              }
            } else {
              this.errors.push("Ooops! Something went wrong.");
            }
          });
      }
    },
  },
};
</script>
