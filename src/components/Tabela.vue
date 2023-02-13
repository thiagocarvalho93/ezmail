<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-snackbar
      transition="scale-transition"
      v-model="snackbar"
      :timeout="snackbarTimeout"
    >
      {{ textoSnackbar }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>

    <v-card class="ma-2 slide">
      <v-card-title class="py-2">
        <h4 class="fade">{{ titulo }}</h4>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisar"
          outlined
          dense
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-divider></v-divider>
      <!-- Tabela desktop -->
      <v-data-table
        v-if="!isMobile"
        height="350px"
        item-key="id"
        :loading="carregando || loading"
        :headers="headers"
        :items="emails"
        :search="search"
        sort-by="data"
        :sort-desc="true"
        dense
        :header-props="{
          sortByText: 'Ordenar por',
        }"
        :footer-props="{
          'items-per-page-options': [10, 25, 50, 100],
          'items-per-page-text': 'Itens',
        }"
        :items-per-page="30"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr
              :class="
                email.lido || !email.recebido
                  ? 'email fade lido'
                  : 'email fade font-weight-bold'
              "
              v-for="email in items"
              :key="email.id"
            >
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="ma-0"
                      :color="email.favorito ? 'yellow' : ''"
                      text
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="marcarFavorito(email)"
                    >
                      <v-icon>{{
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
                      :color="email.importante ? 'red' : ''"
                      text
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="marcarImportante(email)"
                    >
                      <v-icon>{{
                        email.importante
                          ? "mdi-bookmark"
                          : "mdi-bookmark-outline"
                      }}</v-icon>
                    </v-btn>
                  </template>
                  <span>Marcar como importante</span>
                </v-tooltip>
              </td>

              <td @click="abrirEmail(email)">
                <v-avatar class="mr-2" size="30">
                  <img v-if="!!email.avatar" alt="Avatar" :src="email.avatar" />
                  <v-icon size="30" v-else color="blue">mdi-account</v-icon>
                </v-avatar>
                <span>{{ email.endereco }}</span>
              </td>
              <td @click="abrirEmail(email)">
                {{ email.assunto }}
              </td>
              <td @click="abrirEmail(email)">
                {{ new Date(email.data * 1000).toLocaleDateString() }}
              </td>
              <td>
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      :disabled="titulo == 'Lixeira'"
                      class="ma-0"
                      text
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="mandarParaLixeira(email)"
                    >
                      <v-icon color="blue">mdi-delete-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Mandar para lixeira</span>
                </v-tooltip>

                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      :disabled="!email.lido"
                      @click="marcarNaoLido(email)"
                      class="ma-0"
                      text
                      icon
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon color="blue">mdi-email-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Marcar como não lido</span>
                </v-tooltip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>

      <!-- tabela mobile -->
      <v-data-table
        v-if="isMobile"
        height="350px"
        item-key="id"
        :loading="carregando || loading"
        :headers="headersMobile"
        :items="emails"
        :search="search"
        sort-by="data"
        :sort-desc="true"
        dense
        hide-default-header
        :footer-props="{
          'items-per-page-options': [10, 25, 50, 100],
          'items-per-page-text': 'Itens',
        }"
        :items-per-page="30"
      >
        <template v-slot:[`item.endereco`]="{ item }">
          <div
            :class="!item.lido && item.recebido && 'font-weight-bold'"
            @click="abrirEmail(item)"
          >
            <v-avatar class="mr-2 fade" size="30">
              <img v-if="!!item.avatar" alt="Avatar" :src="item.avatar" />
              <v-icon size="30" v-else color="blue">mdi-account</v-icon>
            </v-avatar>
            <span class="fade">{{ item.endereco }}</span>
          </div>
        </template>
        <template v-slot:[`item.assunto`]="{ item }">
          <div
            :class="!item.lido && item.recebido && 'font-weight-bold'"
            @click="abrirEmail(item)"
          >
            <span class="fade">{{ item.assunto }}</span>
          </div>
        </template>
        <template v-slot:[`item.data`]="{ item }">
          <div
            :class="!item.lido && item.recebido && 'font-weight-bold'"
            @click="abrirEmail(item)"
          >
            <span class="fade">{{
              new Date(item.data * 1000).toLocaleString()
            }}</span>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import emailApi from "@/api/email/email-api";

export default {
  props: {
    emails: { type: Array, require: true },
    titulo: { type: String, require: true },
    carregando: { type: Boolean, require: true },
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },

  data() {
    return {
      snackbar: false,
      textoSnackbar: "",
      snackbarTimeout: 5000,
      search: "",
      selected: [],
      loading: false,
      singleSelect: false,
      headersMobile: [
        {
          text:
            this.titulo == "Enviados" || this.titulo == "Rascunhos"
              ? "Para"
              : "De",
          align: "start",
          value: "endereco",
          width: "350px",
          sortable: false,
        },
        { text: "Assunto", value: "assunto", sortable: false },
        { text: "Data", value: "data", width: "100px" },
      ],
      headers: [
        {
          text: "Marcações",
          align: "start",
          filterable: false,
          value: "favorito",
          width: "120px",
          sortable: false,
        },
        {
          text:
            this.titulo == "Enviados" || this.titulo == "Rascunhos"
              ? "Para"
              : "De",
          align: "start",
          value: "endereco",
          width: "350px",
          sortable: false,
        },
        { text: "Assunto", value: "assunto", sortable: false },
        { text: "Data", value: "data", width: "100px" },
        { text: "Ações", value: "", width: "104px", sortable: false },
      ],
    };
  },
  beforeMount() {},
  methods: {
    async abrirEmail(email) {
      if (!email.lido) {
        this.loading = true;
        await emailApi.atualizar(email.id, { lido: !email.lido });
        this.loading = false;
      }
      this.$router.push({ path: `${this.$route.path}/${email.id}` });
    },

    async marcarFavorito(email) {
      this.loading = true;
      await emailApi.atualizar(email.id, { favorito: !email.favorito });
      this.loading = false;
      email.favorito = !email.favorito;

      this.textoSnackbar = email.favorito
        ? "Marcado como favorito"
        : "Desmarcado como favorito";
      this.snackbar = true;
    },

    async marcarImportante(email) {
      this.loading = true;
      await emailApi.atualizar(email.id, { importante: !email.importante });
      this.loading = false;
      email.importante = !email.importante;

      this.textoSnackbar = email.importante
        ? "Marcado como importante"
        : "Desmarcado como importante";
      this.snackbar = true;
    },

    async marcarNaoLido(email) {
      this.loading = true;
      await emailApi.atualizar(email.id, { lido: !email.lido });
      this.loading = false;
      email.lido = !email.lido;

      this.textoSnackbar = "Marcado como não lido";
      this.snackbar = true;
    },

    async mandarParaLixeira(email) {
      this.loading = true;
      await emailApi.atualizar(email.id, { lixeira: true });
      this.loading = false;
      email.lixeira = !email.lixeira;

      this.textoSnackbar = "Enviado para a lixeira";
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

.slide {
  animation: 1s ease-out 0s 1 slideInFromRight;
}

.fade {
  animation: 1s ease-out 0s 1 fadeIn;
}

.email {
  transition: transform 0.4s ease;
  cursor: pointer;
}

.email:hover {
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  transform: scale(1.005);
}

.lido {
  background-color: rgba(0, 0, 0, 0.05);
  color: #444;
}
</style>