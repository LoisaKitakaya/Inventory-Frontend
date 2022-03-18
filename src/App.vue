<template>
  <div class="main-body">
    <nav>
      <Navbar />
    </nav>
    <router-view />
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  beforeCreate() {
    this.$store.commit("initializeStore");

    if (this.$store.state.token) {
      axios.defaults.headers.common["Authorization"] =
        "Token " + this.$store.state.token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
};
</script>

<style lang="scss">
@import "../node_modules/bulma";

// mixins
@mixin background-color {
  background-color: lightcyan !important;
}

.main-body {
  @include background-color();
  min-height: 100vh !important;
}

.home-page {
  @extend .main-body;
}

*::-webkit-scrollbar {
  width: 7px;
}

*::-webkit-scrollbar-track {
  background: darkgray;
}

*::-webkit-scrollbar-thumb {
  background-color: white;
  border: 1px solid darkslategrey;
  border-radius: 2rem;
}

* {
  scrollbar-width: thin;
  scrollbar-color: white darkgray;
}

.auth-form {
  width: 40% !important;
  height: fit-content !important;
  margin: auto !important;
}

.form-button {
  width: fit-content;
  margin: auto;
}

.home-page {
  .section {
    h1 {
      margin-top: 5rem;
    }
  }
}

.table-container {
  width: fit-content;
  margin: auto;
}

.table {
  margin-bottom: 2rem !important;
}

.detail-box {
  width: 50%;
  margin: auto;
}
</style>
