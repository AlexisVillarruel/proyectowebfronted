const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/register",
    component: () => import("components/auth/RegisterForm.vue"),
  },

  {
    path: "/Activity",
    component: () => import("pages/ActividadCrea.vue"),
  },

  {
    path: "/Review",
    component: () => import("pages/ReseñaFormulario.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
