<template>
  <nav
    class="navbar is-white is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <h1 class="title has-text-primary">
          <small>#</small>Inventory<span class="has-text-danger">.</span>
        </h1>
      </router-link>
    </div>
    <div class="navbar-end">
      <router-link to="/inventory" class="navbar-item">Inventory</router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link"> More </a>

        <div class="navbar-dropdown">
          <a class="navbar-item"> About </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Report an issue </a>
        </div>
      </div>
      <div class="navbar-item">
        <div class="buttons" v-if="!$store.state.isAuthenticated">
          <router-link to="/signup" class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link to="/login" class="button is-info"> Login </router-link>
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
    logout() {
      axios
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
    },
  },
};
</script>
