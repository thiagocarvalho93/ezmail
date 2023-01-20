<template>
  <div class="container">
    <div class="card">
      <h1 class="title">EZMail</h1>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          single-line
          filled
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          label="Password"
          single-line
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          filled
          required
        ></v-text-field>

        <v-checkbox
          v-model="rememberPassword"
          class="pa-0 ma-0"
          label="Lembrar-me"
          color="primary"
          value="red"
          hide-details
        ></v-checkbox>

        <v-btn
          color="primary"
          class="btn-login"
          :loading="loading"
          @click="login"
        >
          Login
        </v-btn>
      </v-form>
    </div>
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

.card {
  padding: 50px;
  background-color: white;
  border-radius: 10px;
  width: 400px;
  height: 450px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.title {
  font-size: 50px;
  margin-bottom: 50px;
  font-weight: 400;
}

.btn-login {
  margin-top: 30px;
  text-align: center;
}
</style>