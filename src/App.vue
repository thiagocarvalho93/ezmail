<template>
  <v-app id="app">
    <Toolbar v-if="this.$router.currentRoute.name != 'Login'"></Toolbar>
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
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  height: 100vh;
}

html {
  overflow-y: hidden !important;
}
</style>
