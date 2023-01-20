<template>
  <div>
    <v-card class="ma-2" height="465px">
      <v-card-actions>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="ma-0"
              text
              icon
              @click="voltar()"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="blue">mdi-arrow-left</v-icon>
            </v-btn>
          </template>
          <span
            >Voltar para
            {{
              rotas.find((rota) => rota.path == "/" + $route.params.caixa).title
            }}</span
          >
        </v-tooltip>
        <v-divider vertical class="mx-2"></v-divider>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="ma-0"
              text
              icon
              v-bind="attrs"
              v-on="on"
              @click="marcarFavorito"
            >
              <v-icon :color="email.favorito ? 'yellow' : 'blue'">{{
                email.favorito ? "mdi-star" : "mdi-star-outline"
              }}</v-icon>
            </v-btn>
          </template>
          <span>Marcar como favorito</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="ma-0"
              text
              icon
              v-bind="attrs"
              v-on="on"
              @click="marcarImportante"
            >
              <v-icon :color="email.importante ? 'red' : 'blue'">{{
                email.importante ? "mdi-bookmark" : "mdi-bookmark-outline"
              }}</v-icon>
            </v-btn>
          </template>
          <span>Marcar como importante</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="ma-0"
              text
              icon
              v-bind="attrs"
              v-on="on"
              @click="mandarParaLixeira"
            >
              <v-icon color="blue">mdi-delete-outline</v-icon>
            </v-btn>
          </template>
          <span>Mandar para lixeira</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="ma-0"
              text
              icon
              v-bind="attrs"
              v-on="on"
              @click="marcarNaoLido"
            >
              <v-icon color="blue">mdi-email-outline</v-icon>
            </v-btn>
          </template>
          <span>Marcar como não lido</span>
        </v-tooltip>

        <v-divider vertical class="mx-2"></v-divider>
      </v-card-actions>

      <div v-if="!loading">
        <v-card-title>
          {{ email.assunto }}
        </v-card-title>
        <v-card-subtitle>
          {{
            `De: ${email.endereco}\nEnviada em: ${new Date(
              email.data * 1000
            ).toLocaleString()}`
          }}
        </v-card-subtitle>
        <v-card-text>
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
    },

    async marcarImportante() {
      this.loading = true;
      await emailApi.atualizar(this.email.id, {
        importante: !this.email.importante,
      });
      this.loading = false;
      this.email.importante = !this.email.importante;
    },

    async mandarParaLixeira() {
      this.loading = true;
      await emailApi.atualizar(this.email.id, { lixeira: true });
      this.loading = false;
      this.email.lixeira = !this.email.lixeira;
    },

    async marcarNaoLido() {
      this.loading = true;
      await emailApi.atualizar(this.email.id, { lido: !this.email.lido });
      this.loading = false;
      this.email.lido = !this.email.lido;
    },
  },
};
</script>
  
  <style lang="scss" scoped>
</style>