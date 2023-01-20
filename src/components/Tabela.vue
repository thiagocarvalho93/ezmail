<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card>
    <v-card-title class="py-2">
      <span>{{ titulo }}</span>

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
    <v-data-table
      height="350px"
      :single-select="singleSelect"
      item-key="id"
      show-select
      :loading="carregando || loading"
      :headers="headers"
      :items="emails"
      :search="search"
      sort-by="data"
      dense
      :footer-props="{
        'items-per-page-options': [10, 25, 50, 100],
        'items-per-page-text': 'Itens por página',
      }"
      :items-per-page="30"
    >
      <template v-slot:body="{ items, isSelected, select }">
        <tbody>
          <tr
            :class="
              email.lido || !email.recebido ? 'email lido' : 'email nao-lido'
            "
            v-for="email in items"
            :key="email.id"
          >
            <td>
              <v-checkbox
                :input-value="isSelected(email)"
                style="margin: 0px; padding: 0px"
                color="info"
                hide-details
                @click="select(email, !isSelected(email))"
              >
              </v-checkbox>
            </td>

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
                      email.importante ? "mdi-bookmark" : "mdi-bookmark-outline"
                    }}</v-icon>
                  </v-btn>
                </template>
                <span>Marcar como importante</span>
              </v-tooltip>
            </td>

            <td @click="abrirEmail(email)">
              {{ email.endereco }}
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
  </v-card>
</template>

<script>
import emailApi from "@/api/email/email-api";

export default {
  props: {
    emails: { type: Array, require: true },
    titulo: { type: String, require: true },
    carregando: { type: Boolean, require: true },
  },
  data() {
    return {
      search: "",
      selected: [],
      loading: false,
      singleSelect: false,
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
          width: "200px",
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
    },

    async marcarImportante(email) {
      this.loading = true;
      await emailApi.atualizar(email.id, { importante: !email.importante });
      this.loading = false;
      email.importante = !email.importante;
    },

    async marcarNaoLido(email) {
      this.loading = true;
      await emailApi.atualizar(email.id, { lido: !email.lido });
      this.loading = false;
      email.lido = !email.lido;
    },

    async mandarParaLixeira(email) {
      this.loading = true;
      await emailApi.atualizar(email.id, { lixeira: true });
      this.loading = false;
      email.lixeira = !email.lixeira;
    },
  },
};
</script>

<style lang="scss" scoped>
.email {
  cursor: pointer;
}

.email:hover {
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.nao-lido {
  font-weight: bold;
}

.lido {
  background-color: rgba(0, 0, 0, 0.05);
  color: #444;
}
</style>