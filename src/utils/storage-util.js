const salvarToken = (token) => {
  localStorage.setItem("token", token);
};

const obterToken = () => {
  return localStorage.getItem("token");
};

const excluirToken = () => {
  localStorage.removeItem("token");
};

export default {
  salvarToken,
  obterToken,
  excluirToken,
};
