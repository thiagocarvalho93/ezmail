<template>
  <div class="container">
    <v-card width="330px" elevation="10" class="pa-5">
      <v-card-title class="d-flex justify-center mb-3">
        <h3>Login</h3>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
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
            color="primary"
            hide-details
          ></v-checkbox>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-center align-center">
        <v-btn
          color="primary"
          class="pa-5 mb-5"
          width="100%"
          :loading="loading"
          :disabled="!valid"
          @click="login"
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
.container {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
</style>