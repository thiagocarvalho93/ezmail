<template>
  <div>
    <v-card class="ma-2" height="465px">
      <v-card-title>Novo email</v-card-title>
      <v-card-subtitle>
        <v-text-field
          v-model="destinatario"
          :rules="emailRules"
          prefix="Para: "
          dense
          single-line
          required
          autofocus
        ></v-text-field>
        <v-text-field
          v-model="assunto"
          prefix="Assunto: "
          dense
          single-line
          required
        ></v-text-field>
      </v-card-subtitle>
      <v-card-text>
        <v-textarea
          label="Email"
          counter
          no-resize
          dense
          rows="7"
          :value="texto"
          hint="Escreva aqui o seu email"
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn dark color="blue">Enviar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Email from "@/models/Email";

export default {
  data() {
    return {
      email: new Email(),
      texto: "",
      destinatario: "",
      assunto: "",
      emailRules: [
        (v) => !!v || "Campo obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
      ],
    };
  },

  async beforeMount() {},

  methods: {},
};
</script>
  
  <style lang="scss" scoped>
</style>