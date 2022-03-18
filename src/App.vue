<template>
  <div class="main-body">
    <nav>
      <Navbar />
    </nav>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
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
}
</style>
