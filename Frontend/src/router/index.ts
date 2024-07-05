// src/router/index.ts
import { route } from 'quasar/wrappers';
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from './routes';
import { Store } from 'vuex';
import { StateInterface } from 'src/store/types';
import { attachGuards } from 'src/boot/guards';

export default route(function ({ store }: { store: Store<StateInterface> }) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Laissez ceci tel quel et changez-le uniquement dans quasar.conf.js si vous savez ce que vous faites !
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  });

  // Attacher les gardes de navigation
  attachGuards(Router);

  return Router;
});
