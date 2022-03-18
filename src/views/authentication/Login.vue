<template>
  <div class="home-page">
    <div class="section">
      <h1 class="title has-text-centered">Login</h1>
      <form class="box auth-form">
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
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>
