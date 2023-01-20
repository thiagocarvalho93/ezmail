<template>
  <div>
    <Tabela titulo="Lixeira" :emails="emails" :carregando="carregando" />
  </div>
</template>

<script>
import emailApi from "@/api/email/email-api";
import Tabela from "@/components/Tabela.vue";
import Email from "@/models/Email";

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
    await this.obterEmailsEntrada();
  },
  methods: {
    async obterEmailsEntrada() {
      this.carregando = true;
      await emailApi
        .obterTodos()
        .then((response) => {
          this.emails = response.data
            .map((email) => new Email(email))
            .filter((email) => !!email.lixeira);
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