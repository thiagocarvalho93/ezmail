<template>
  <div>
    <v-snackbar transition="scale-transition" v-model="snackbar" :timeout="snackbarTimeout">
      {{ textoSnackbar }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>

    <v-card class="ma-2" height="465px">
      <v-card-actions class="fade py-0">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ma-0" text icon @click="voltar()" v-bind="attrs" v-on="on">
              <v-icon color="blue">mdi-arrow-left</v-icon>
            </v-btn>
          </template>
          <span>
            Voltar para
            {{ rotas.find((rota) => rota.path == "/" + $route.params.caixa).title }}
          </span>
        </v-tooltip>
        <v-divider vertical class="mx-2"></v-divider>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ma-0" text icon v-bind="attrs" v-on="on" @click="marcarFavorito">
              <v-icon :color="email.favorito ? 'yellow' : 'blue'">
                {{ email.favorito ? "mdi-star" : "mdi-star-outline" }}
              </v-icon>
            </v-btn>
          </template>
          <span>Marcar como favorito</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ma-0" text icon v-bind="attrs" v-on="on" @click="marcarImportante">
              <v-icon :color="email.importante ? 'red' : 'blue'">
                {{ email.importante ? "mdi-bookmark" : "mdi-bookmark-outline" }}
              </v-icon>
            </v-btn>
          </template>
          <span>Marcar como importante</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ma-0" text icon v-bind="attrs" v-on="on" :disabled="email.lixeira" @click="mandarParaLixeira">
              <v-icon color="blue">mdi-delete-outline</v-icon>
            </v-btn>
          </template>
          <span>Mandar para lixeira</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ma-0" text icon v-bind="attrs" v-on="on" :disabled="!email.lido" @click="marcarNaoLido">
              <v-icon color="blue">mdi-email-outline</v-icon>
            </v-btn>
          </template>
          <span>Marcar como não lido</span>
        </v-tooltip>

        <v-divider vertical class="mx-2"></v-divider>
      </v-card-actions>
      <v-divider></v-divider>

      <div v-if="!loading">
        <v-card-title class="fade mb-3">
          <h4>{{ email.assunto }}</h4>
        </v-card-title>
        <v-card-subtitle class="fade">
          <v-chip class="slide mb-3">
            <v-avatar size="30" class="mr-3">
              <img v-if="!!email.avatar" alt="Avatar" :src="email.avatar" />
              <v-icon size="30" v-else color="blue">mdi-account</v-icon>
            </v-avatar>
            <h4>{{ email.endereco }}</h4>
          </v-chip>
          <h4>{{ new Date(email.data * 1000).toLocaleString() }}</h4>
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text class="corpo-email fade">
          {{ email.corpoEmail }}
        </v-card-text>
      </div>

      <div v-else>
        <v-progress-linear indeterminate color="primary"></v-progress-linear>
      </div>
    </v-card>
  </div>
</template>
  
<script>
import Email from "@/models/Email";
import emailApi from "@/api/email/email-api";
import rotas from "@/router/routes";

export default {
  data() {
    return {
      snackbar: false,
      textoSnackbar: "",
      snackbarTimeout: 5000,
      email: new Email(),
      routeName: "",
      loading: true,
      rotas: rotas,
    };
  },

  async beforeMount() {
    await this.obterEmail();
  },

  methods: {
    async obterEmail() {
      this.loading = true;
      await emailApi
        .obterPorId(this.$route.params.id)
        .then((response) => {
          this.email = response.data;
          if (response.status != 200)
            this.$router.push({ name: "CaixaEntrada" });
        })
        .catch((error) => {
          console.log(error);
        });
      this.loading = false;
    },

    voltar() {
      const rotaCaixa = rotas.find(
        (rota) => rota.path == "/" + this.$route.params.caixa
      );
      this.$router.push({ name: rotaCaixa.name });
    },

    async marcarFavorito() {
      this.loading = true;
      await emailApi.atualizar(this.email.id, {
        favorito: !this.email.favorito,
      });
      this.loading = false;
      this.email.favorito = !this.email.favorito;

      this.textoSnackbar = this.email.favorito
        ? "Marcado como favorito"
        : "Desmarcado como favorito";
      this.snackbar = true;
    },

    async marcarImportante() {
      this.loading = true;
      await emailApi.atualizar(this.email.id, {
        importante: !this.email.importante,
      });
      this.loading = false;
      this.email.importante = !this.email.importante;

      this.textoSnackbar = this.email.importante
        ? "Marcado como importante"
        : "Desmarcado como importante";
      this.snackbar = true;
    },

    async mandarParaLixeira() {
      this.loading = true;
      await emailApi.atualizar(this.email.id, { lixeira: true });
      this.loading = false;
      this.email.lixeira = !this.email.lixeira;

      this.textoSnackbar = "Enviado para a lixeira";
      this.snackbar = true;
    },

    async marcarNaoLido() {
      this.loading = true;
      await emailApi.atualizar(this.email.id, { lido: !this.email.lido });
      this.loading = false;
      this.email.lido = !this.email.lido;

      this.textoSnackbar = "Marcado como não lido";
      this.snackbar = true;
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

.corpo-email {
  max-height: 280px;
  overflow: auto;
}

.slide {
  animation: 1s ease-out 0s 1 slideInFromRight;
}

.fade {
  animation: 1s ease-out 0s 1 fadeIn;
}
</style>