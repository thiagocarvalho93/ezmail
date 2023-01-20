const Login = () => import("@/views/LoginView.vue");
const CaixaEntrada = () => import("@/views/CaixaEntradaView.vue");
const Enviados = () => import("@/views/EnviadosView.vue");
const Lixeira = () => import("@/views/LixeiraView.vue");
const Favoritos = () => import("@/views/FavoritosView.vue");
const Importantes = () => import("@/views/ImportantesView.vue");
const Email = () => import("@/views/CorpoEmailView.vue");
const NovoEmail = () => import("@/views/NovoEmailView.vue");

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    title: "Login",
    icon: "",
    menu: false,
  },
  {
    path: "/caixa-de-entrada",
    name: "CaixaEntrada",
    component: CaixaEntrada,
    title: "Caixa de entrada",
    icon: "mdi-email-open-outline",
    menu: true,
  },
  {
    path: "/enviados",
    name: "Enviados",
    component: Enviados,
    title: "Enviados",
    icon: "mdi-send-outline",
    menu: true,
  },
  {
    path: "/favoritos",
    name: "Favoritos",
    component: Favoritos,
    title: "Favoritos",
    icon: "mdi-star-outline",
    menu: true,
  },
  {
    path: "/importantes",
    name: "Importantes",
    component: Importantes,
    title: "Importantes",
    icon: "mdi-bookmark-outline",
    menu: true,
  },
  {
    path: "/lixeira",
    name: "Lixeira",
    component: Lixeira,
    title: "Lixeira",
    icon: "mdi-delete-outline",
    menu: true,
  },
  {
    path: "/novo",
    name: "Novo",
    component: NovoEmail,
    title: "Novo",
    icon: "mdi-pencil-outline",
    menu: true,
  },
  {
    path: "/:caixa/:id",
    name: "CorpoEmail",
    component: Email,
    title: "Email",
    icon: "",
    menu: false,
  },
];

export default routes;
