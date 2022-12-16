import { RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    showInMenu: boolean;
    displayText: string;
    icon: string;
  }
}
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main-layout",
    redirect: "tratamento",
    component: () => import("../layouts/mainLayout.vue"),
    children: [
      {
        path: "tratamento",
        name: "page-tratamento",
        component: () => import("../pages/tratamentos/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Gestão de tratamentos",
          roles: [1, 2, 4, 5],
          icon: "tratamentos.svg",
        },
      },
      {
        path: "atendimento",
        name: "page-atendimento",
        component: () => import("../pages/atendimentos/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Atendimentos",
          roles: [1, 2],
          icon: "atendimento.svg",
        },
      },
      {
        path: "notificacoes",
        name: "page-notificacoes",
        component: () => import("../pages/notificacoes/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Notificações",
          roles: [2, 3],
          icon: "notificacoes.svg",
        },
      },
      {
        path: "script-autorizacao",
        name: "page-script-autorizacao",
        component: () => import("../pages/script-autorizacao/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Scripts de Autorização",
          roles: [2],
          icon: "scriptautorizacao.svg",
        },
      },
      {
        path: "pacientes",
        name: "page-pacientes",
        component: () => import("../pages/pacientes/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Pacientes",
          roles: [1, 2, 4, 5],
          icon: "pacientes.svg",
        },
      },
      {
        path: "locais-procedimentos",
        name: "page-locais-procedimentos",
        component: () => import("../pages/locais-procedimentos/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Locais de Procedimentos",
          roles: [2],
          icon: "locaisprocedimento.svg",
        },
      },
      {
        path: "usuarios",
        name: "page-usuarios",
        component: () => import("../pages/usuarios/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Usuários",
          roles: [2],
          icon: "usuarios.svg",
        },
      },
      {
        path: "cids",
        name: "page-cids",
        component: () => import("../pages/cids/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "CIDs",
          roles: [2],
          icon: "cid.svg",
        },
      },
      {
        path: "especialidades",
        name: "page-especialidades",
        component: () => import("../pages/especialidades/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Especialidades",
          roles: [2],
          icon: "especialidade.svg",
        },
      },
      {
        path: "tipos-tratamento",
        name: "page-tipos-tratamento",
        component: () => import("../pages/tipos-tratamento/list.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Tipos de Tratamentos",
          roles: [2],
          icon: "tipotratamentos.svg",
        },
      },
      {
        path: "tipos-tratamento/new",
        name: "page-tipos-tratamento-new",
        component: () => import("../pages/tipos-tratamento/new.vue"),
        meta: {
          needsAuth: true,
          showInMenu: false,
          displayText: "Tipos de Tratamentos",
          roles: [2],
          icon: "tipotratamentos.svg",
        },
      },
      {
        path: "convenios",
        name: "page-convênios",
        component: () => import("../pages/convenios/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Convênios",
          roles: [2, 4, 5],
          icon: "convenios.svg",
        },
      },
      {
        path: "escalas",
        name: "page-escalas",
        component: () => import("../pages/escalas/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Escalas",
          roles: [1, 2, 3],
          icon: "escalas.svg",
        },
      },
      {
        path: "tipos-recorrencia",
        name: "page-tipos-recorrencia",
        component: () => import("../pages/tipos-recorrencia/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Tipos de Recorrência",
          roles: [2],
          icon: "tiposrecorrencia.svg",
        },
      },
      {
        path: "credenciamentos",
        name: "page-credenciamentos",
        component: () => import("../pages/credenciamentos/index.vue"),
        meta: {
          needsAuth: true,
          showInMenu: true,
          displayText: "Credenciamentos",
          roles: [1, 2, 4, 5],
          icon: "credenciamentos.svg",
        },
      },
    ],
  },
  {
    path: "/account",
    name: "account-layout",
    redirect: "/login",
    component: () => import("../layouts/anonymousLayout.vue"),
    children: [
      {
        path: "login",
        name: "accounts-login",
        component: () => import("../pages/account/login.vue"),
        meta: {
          needsAuth: false,
          showInMenu: false,
          displayText: "",
          icon: "",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "error-404",
  },
];
