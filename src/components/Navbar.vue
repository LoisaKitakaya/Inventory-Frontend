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
        <div class="buttons">
          <router-link to="/signup" class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link to="/login" class="button is-info"> Log in </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
