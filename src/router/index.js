import { createRouter, createWebHistory } from "vue-router";
import InicialView from "../views/InicialView.vue";
import ContatoView from "../views/ContatoView.vue";
import ServicoView from "../views/ServicoView.vue";
import SobreView from "../views/SobreView.vue";
import ContaView from "../views/ContaView.vue";
import ReservaView from "../views/ReservaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicial",
      component: InicialView,
    },
    {
      path: "/contato",
      name: "contato",
      component: ContatoView,
    },

    {
      path: "/servico",
      name: "servico",
      component: ServicoView,
    },
    {
        path: "/sobre",
        name: "sobre",
        component: SobreView,
      },
      {
        path: "/conta",
        name: "conta",
        component: ContaView,
      },
      {
        path: "/reserva",
        name: "reserva",
        component: ReservaView,
      },
  ],
});

export default router;
