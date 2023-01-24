export default class Email {
  constructor(obj) {
    obj = obj || {};
    this.id = obj.id;
    this.endereco = obj.endereco || "";
    this.assunto = obj.assunto || "";
    this.corpoEmail = obj.corpoEmail || "";
    this.data = obj.data;
    this.lido = obj.lido || false;
    this.favorito = obj.favorito || false;
    this.importante = obj.importante || false;
    this.recebido = obj.recebido || false;
    this.lixeira = obj.lixeira || false;
    this.rascunho = obj.rascunho || false;
    this.avatar = obj.avatar || "";
  }
  converterTimestampParaData = () => {
    this.data = new Date(this.data).toLocaleDateString();
  };
}
