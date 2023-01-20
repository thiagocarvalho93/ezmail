<template>
  <div>
    <Tabela
      titulo="Caixa de entrada"
      :emails="emails"
      :carregando="carregando"
    />
  </div>
</template>

<script>
// import emailsRecebidos from "@/mocks/emailsRecebidos.json";
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
            .filter(
              (email) => !email.lixeira && !email.spam && !!email.recebido
            );
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