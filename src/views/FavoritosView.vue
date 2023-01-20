<template>
  <div>
    <Tabela titulo="Rascunhos" :emails="emails" :carregando="carregando" />
  </div>
</template>

<script>
import Tabela from "@/components/Tabela.vue";
import Email from "@/models/Email";
import emailApi from "@/api/email/email-api";

export default {
  components: { Tabela },
  data() {
    return {
      search: "",
      emails: [],
      carregando: true,
    };
  },
  async beforeMount() {
    await this.obterRascunhos();
  },
  methods: {
    async obterRascunhos() {
      this.carregando = true;
      await emailApi
        .obterTodos()
        .then((response) => {
          this.emails = response.data
            .map((email) => new Email(email))
            .filter((email) => !email.spam && email.favorito);
        })
        .catch((error) => {
          console.log(error);
        });
      this.carregando = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>