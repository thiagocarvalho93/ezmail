import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
// import storageUtil from "@/utils/storage-util";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name != "Login") {
    if (localStorage.getItem("token") == null) {
      next({ name: "Login" });
      return;
    } else next();
  } else next();
});

export default router;
