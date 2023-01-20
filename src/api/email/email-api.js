import api from "@/api/api";
const RESOURCE = "/email";

const obterTodos = async () => {
  try {
    const response = await api.get(RESOURCE);
    return response;
  } catch (error) {
    return error.response;
  }
};

const obterPorId = async (id) => {
  try {
    const response = await api.get(`${RESOURCE}/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

const cadastrar = async (email) => {
  try {
    const response = await api.post(RESOURCE, email);
    return response;
  } catch (error) {
    return error.response;
  }
};

const atualizar = async (id, email) => {
  try {
    const response = await api.put(`${RESOURCE}/${id}`, email);
    return response;
  } catch (error) {
    return error.response;
  }
};

const deletar = async (id) => {
  try {
    const response = await api.delete(`${RESOURCE}/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export default {
  cadastrar,
  atualizar,
  deletar,
  obterPorId,
  obterTodos,
};
