<template>
  <div>
    <v-snackbar
      transition="scale-transition"
      v-model="snackbar"
      :timeout="snackbarTimeout"
    >
      {{ textoSnackbar }}
      <template v-slot:action="{ attrs }">
        <v-btn color="indigo" text v-bind="attrs" @click="snackbar = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>

    <v-card class="ma-2" height="465px">
      <v-card-title class="py-3">
        <h4>Novo email</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="fade">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="destinatario"
            :rules="emailRules"
            prefix="Para: "
            :loading="loading"
            :disabled="loading"
            dense
            single-line
            required
            autofocus
          ></v-text-field>
          <v-text-field
            v-model="assunto"
            :rules="assuntoRules"
            label="Assunto"
            :loading="loading"
            :disabled="loading"
            dense
            single-line
            required
          ></v-text-field>
          <v-textarea
            v-model="texto"
            label="Email"
            :loading="loading"
            :disabled="loading"
            class="mt-4"
            counter
            no-resize
            dense
            rows="7"
            hint="Escreva aqui o seu email"
          ></v-textarea>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="fade">
        <v-btn dark color="indigo" :loading="loading" @click="enviarEmail">
          Enviar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import emailApi from "@/api/email/email-api";
import Email from "@/models/Email";

export default {
  data() {
    return {
      valid: false,
      snackbar: false,
      textoSnackbar: "",
      snackbarTimeout: 5000,
      loading: false,
      email: new Email(),
      texto: "",
      destinatario: "",
      assunto: "",
      emailRules: [
        (v) => !!v || "Campo obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
      ],
      assuntoRules: [(v) => !!v || "Campo obrigatório"],
    };
  },

  async beforeMount() {},

  methods: {
    async enviarEmail() {
      this.loading = true;
      this.$refs.form.validate();
      if (!this.$refs.form.value) {
        this.textoSnackbar = "Preencha corretamente";
        this.snackbar = true;
        this.loading = false;
        return;
      }

      const email = new Email({
        endereco: this.destinatario,
        assunto: this.assunto,
        corpoEmail: this.texto,
        data: new Date(),
      });

      await emailApi
        .cadastrar(email)
        .then((res) => {
          console.log(res);
          this.textoSnackbar = "Email enviado com sucesso";
        })
        .catch((error) => {
          this.textoSnackbar = error.message;
        });
      this.limparCampos();
      this.loading = false;
      this.snackbar = true;
    },

    limparCampos() {
      this.destinatario = "";
      this.assunto = "";
      this.texto = "";
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
    transform: translateX(1%);
  }
  100% {
    transform: translateX(0);
  }
}

.slide {
  animation: 1s ease-out 0s 1 slideInFromRight;
}

.fade {
  animation: 1s ease-out 0s 1 fadeIn;
}
</style>