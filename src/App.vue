<template>
  <v-app id="app">
    <Toolbar v-if="
      this.$router.currentRoute.name != 'Login' &&
      !!this.$router.currentRoute.name
    "></Toolbar>
    <v-main class="container">
      <div>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";

export default {
  components: { Toolbar },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

.container {
  background-color: #1A237E;
  height: 100vh;
}

html {
  overflow-y: hidden !important;
}
</style>
