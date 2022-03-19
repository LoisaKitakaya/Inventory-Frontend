<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
    integrity="sha384-ejwKkLla8gPP8t2u0eQyL0Q/4ItcnyveF505U0NIobD/SMsNyXrLti6CWaD0L52l"
    crossorigin="anonymous"
  />
  <div class="main-body">
    <nav>
      <Navbar />
    </nav>
    <div
      class="loader-container is-fullwidth"
      :class="{ 'is-loading': $store.state.isLoading }"
    >
      <div class="box loader-box has-background-dark">
        <div class="loader"></div>
        <div>
          <p class="has-text-primary">Loading...</p>
        </div>
      </div>
    </div>
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

// variables
$loader-color: hsl(171, 100%, 41%);

// mixins
@mixin background-color {
  background-color: hsl(206, 70%, 96%) !important;
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

.form-button,
.table-container {
  width: fit-content;
  margin: auto;
}

.home-page {
  .section {
    h1 {
      margin-top: 2rem;
    }
  }
}

.detail-box,
.about-container {
  width: 50%;
  margin: auto;
}

.about-container {
  text-align: justify !important;
}

.loader {
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid $loader-color;
  border-color: $loader-color transparent $loader-color transparent;
}

.loader-box {
  width: fit-content !important;
  margin: auto !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loader-container {
  position: relative;
  top: 15rem;
  display: none;
  justify-content: center;
  height: 0;
  z-index: 100;

  &.is-loading {
    display: flex;
  }
}
</style>
