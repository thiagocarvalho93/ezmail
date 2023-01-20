// Por enquanto o login é mockado
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const login = async () => {
  const response = new Promise((res) =>
    setTimeout(() => res({ token: token }), 1000)
  );
  return response;
};

export default {
  login,
};
