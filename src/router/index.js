import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name != "Login") {
    if (localStorage.getItem("token") == null) {
      next({ name: "Login" });
      return;
    } else if (routes.some((rota) => rota.name == to.name)) {
      next();
    } else {
      next({ name: "CaixaEntrada" });
    }
  } else next();
});

export default router;
