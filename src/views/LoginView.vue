<template>
  <div class="container">
    <v-card width="330px" elevation="10" class="pa-6">
      <v-card-title class="d-flex justify-center mb-3">
        <h2 class="fade">Login</h2>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" class="fade" v-model="valid" lazy-validation>
          <v-text-field
            outlined
            v-model="email"
            :rules="emailRules"
            label="Email"
            class="mb-2"
            required
          ></v-text-field>

          <v-text-field
            outlined
            v-model="password"
            class=""
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            required
          ></v-text-field>

          <v-checkbox
            v-model="rememberPassword"
            class="pa-0 ma-0 mb-2"
            label="Lembrar-me"
            color="indigo"
            hide-details
          ></v-checkbox>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-center align-center fade">
        <v-btn
          color="indigo"
          class="pa-5 mb-5"
          width="100%"
          :loading="loading"
          :disabled="!valid"
          @click="login"
          dark
        >
          Entrar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import authApi from "@/api/auth/auth-api";
import storageUtil from "@/utils/storage-util";

export default {
  data: () => ({
    valid: true,
    email: "john.doe@ezmail.com",
    password: "123",
    loading: false,
    showPassword: false,
    rememberPassword: true,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [(v) => !!v || "Password is required"],
  }),

  methods: {
    async login() {
      this.loading = true;
      this.$refs.form.validate();
      if (!this.$refs.form.value) {
        this.loading = false;
        return;
      }
      await authApi
        .login()
        .then((res) => {
          storageUtil.salvarToken(res.token);
        })
        .catch((error) => console.log(error));
      this.loading = false;
      this.$router.push({ name: "CaixaEntrada" });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0);
  }
}

.container {
  background-color: #1A237E;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

.slide {
  animation: 1s ease-out 0s 1 slideInFromRight;
}

.fade {
  animation: 1s ease-out 0s 1 fadeIn;
}
</style>