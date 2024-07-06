const routes = [
  {
    path: "/dashboard",

    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "actividades",
        component: () => import("pages/BuscadorActividadPrincipal.vue"),
      },
      {
        path: "actividadesSec",
        component: () => import("pages/BuscadorActividadSecundaria.vue"),
      },
    ],
  },

  {
    path: "/registroUsuario",
    component: () => import("components/auth/RegisterForm.vue"),
  },

  {
    path: "/registroEmpresa",
    component: () => import("components/auth/RegisterFormEmpresa.vue"),
  },

  {
    path: "/",
    component: () => import("components/auth/LoginForm.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
