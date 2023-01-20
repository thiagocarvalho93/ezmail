<template>
  <div>
    <Tabela titulo="Importantes" :emails="emails" :carregando="carregando" />
  </div>
</template>

<script>
// import emailsSpam from "@/mocks/emailsSpam.json";
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
    await this.obterEmailsSpam();
  },
  methods: {
    async obterEmailsSpam() {
      this.carregando = true;
      await emailApi
        .obterTodos()
        .then((response) => {
          this.emails = response.data
            .map((email) => new Email(email))
            .filter((email) => !email.spam && !!email.importante);
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