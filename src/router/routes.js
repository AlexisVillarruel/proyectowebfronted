const routes = [
  {
    path: "/dashboard",

    children: [
      {
        path: "BuscadorActPrin",
        component: () => import("pages/BuscadorActividadPrincipal.vue"),
      },

      {
        path: "BuscadorActSec",
        component: () => import("pages/BuscadorActividadPrincipal.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
