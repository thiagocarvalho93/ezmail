<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-navigation-drawer
      app
      bottom
      clipped
      width="200"
      v-model="drawer"
      :mini-variant.sync="mini"
      expand-on-hover
      color="indigo"
      v-if="!isMobile"
      nav
      dark
    >
      <v-list nav dense>
        <div v-for="(rota, i) in rotas" :key="i">
          <v-list-item :to="rota.path" :key="i" link>
            <v-list-item-icon>
              <v-icon>{{ rota.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ rota.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-divider class="ma-0 pa-0"></v-divider> -->
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      app
      bottom
      clipped
      width="200"
      v-model="drawer"
      color="indigo"
      v-if="isMobile"
      nav
      dark
    >
      <v-list nav dense>
        <div v-for="(rota, i) in rotas" :key="i">
          <v-list-item :to="rota.path" :key="i" link>
            <v-list-item-icon>
              <v-icon>{{ rota.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ rota.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-divider class="ma-0 pa-0"></v-divider> -->
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="indigo" dark app clipped-left outlined>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>EZmail</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>

      <v-menu
        transition="scroll-y-transition"
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar size="32">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="brown">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> Edit Account </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout"> Disconnect </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import routes from "@/router/routes";
import storageUtil from "@/utils/storage-util";

export default {
  data: () => ({
    drawer: false,
    mini: true,
    group: null,
    rotas: routes.filter((rota) => !!rota.menu),
    user: {
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@ezmail.com",
    },
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    logout() {
      storageUtil.excluirToken();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>