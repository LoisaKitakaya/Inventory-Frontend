<template>
  <nav
    class="navbar is-info is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <h1 class="title has-text-light">
          <small>#</small>Inventory<span class="has-text-danger">.</span>
        </h1>
      </router-link>
    </div>
    <div class="navbar-end">
      <router-link to="/inventory" class="navbar-item">Inventory</router-link>
      <router-link to="/about" class="navbar-item"> About </router-link>

      <div class="navbar-item">
        <div class="buttons" v-if="!$store.state.isAuthenticated">
          <router-link to="/signup" class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link to="/login" class="button is-light"> Login </router-link>
        </div>
        <div class="buttons" v-else>
          <a class="button is-danger" @click="logout"> Logout </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { toast } from "bulma-toast";

export default {
  name: "Navbar",
  methods: {
    async logout() {
      this.$store.commit("setIsLoading", true);

      await axios
        .post("/api-v1/token/logout/")
        .then((response) => {
          console.log(response.data);

          toast({
            message: "Logged out.",
            type: "is-danger",
            dismissible: true,
            pauseOnHover: true,
            duration: 3000,
            position: "bottom-right",
          });
        })
        .catch((error) => {
          console.log(error);
        });

      axios.defaults.headers.common["Authorization"] = "";
      sessionStorage.removeItem("token");

      this.$store.commit("removeToken");

      this.$router.push("/");

      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>
